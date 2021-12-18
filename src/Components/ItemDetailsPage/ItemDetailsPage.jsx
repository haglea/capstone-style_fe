import { Button, Col, Container, Row } from "react-bootstrap";
import "./ItemDetailsPage.css";
import NavbarLogo from "../Navbar/NavbarLogo";
import { Link, useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import { useSelector } from "react-redux";

const ItemDetailsPage = (props) => {
  const { itemID } = useParams();
  const items = useSelector((state) => state.items.items);
  let item = items.find((item) => item._id === itemID);

  return (
    <Container className="m-auto">
      <NavbarLogo />
      <Row className="my-5">
        <Col className="d-flex justify-content-start">
          <Link to="/home">
            <Button className="ml-2" variant="primary" id="itemdetail-button">
              {" "}
              Back
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="my-5">
        {item && <ItemDetails key={item._id} item={item} />}
      </Row>
    </Container>
  );
};

export default ItemDetailsPage;
