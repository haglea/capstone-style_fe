import { useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import NavbarLogo from "../Navbar/NavbarLogo";
import { Link } from "react-router-dom";
import { addItem, addImage } from "../../redux/actions/itemActions";
import { connect } from "react-redux";
import AddItemForm from "./AddItemForm";
import "./SellerPage.css";

const SellerPage = ({ auth, addItem, addImage }) => {
  const [form, showForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ci, setCi] = useState(false);

  const toggleForm = () => {
    form ? showForm(false) : showForm(true);
  };

  const submit = async (values) => {
    setIsLoading(true);
    const url = `${process.env.REACT_APP_PROD_URL}items`;
    if (auth.user._id) {
      const user = auth.user._id;
      await addItem(
        url,
        values.item_name,
        values.price,
        values.category,
        values.description,
        user
      );
    } else {
      const userLocalStorage = localStorage.getItem("user");
      const user = JSON.parse(userLocalStorage)._id;
      await addItem(
        url,
        values.item_name,
        values.price,
        values.category,
        values.description,
        user
      );
    }
    const newItem = localStorage.getItem("newItem");
    const itemID = JSON.parse(newItem)._id;
    if (itemID) {
      if (values.image) {
        const formData = new FormData();
        formData.append("image", values.image);
        const url = `${process.env.REACT_APP_PROD_URL}items/${itemID}`;
        await addImage(url, formData);
        setIsLoading(false);
        const currentItem = localStorage.getItem("newItem");
        setCi(JSON.parse(currentItem));
        localStorage.removeItem("newItem");
        showForm(false);
        displayAlert();
      }
    }
  };

  const displayAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <Container>
      <NavbarLogo />
      <Row className="my-5">
        <Col className="d-flex justify-content-start">
          <a href="/home">
            <Button className="ml-2" variant="primary" id="additem-button">
              {" "}
              Back
            </Button>
          </a>
        </Col>
      </Row>
      <Row className="m-auto w-50">
        <Col>
          {showAlert && (
            <Alert variant="success">
              {" "}
              <Alert.Heading>Item was added</Alert.Heading>
            </Alert>
          )}
        </Col>
      </Row>
      <Row className="m-auto w-50">
        <Col>
          {isLoading && <Spinner animation="border" variant="success" />}
        </Col>
      </Row>
      {ci ? (
        <>
          <Col md={3}>
            <Card id="item-card" className="card-style d-flex flex-wrap">
              <Link to={`/ ${ci._id}`}>
                <Card.Img variant="left" src={ci.image} />
              </Link>
              <Badge pill variant="secondary" className="badge">
                {ci.price} €
              </Badge>
              <Card.Body className="d-flex flex-row justify-content-center">
                <Card.Title>
                  <span>{ci.category}</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </>
      ) : (
        <Col className="d-flex justify-content-center">
          <h3>No items </h3>
        </Col>
      )}

      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <Button
            onClick={toggleForm}
            className="ml-2"
            variant="primary"
            id="sellerpage-button"
          >
            {" "}
            Add New Item{" "}
          </Button>
        </Col>
      </Row>

      {form ? (
        <>
          <Row className=" mt-3">
            <Col className="d-flex justify-content-start">
              <AddItemForm onSubmit={(values) => submit(values)} />
            </Col>
          </Row>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addItem: (url, item_name, price, category, description, user) =>
    dispatch(addItem(url, item_name, price, category, description, user)),
  addImage: (url, formData) => dispatch(addImage(url, formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SellerPage);
