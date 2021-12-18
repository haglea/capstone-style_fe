import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import "./MySearch.css";
import Item from "./Item";
import { useEffect, useState } from "react";
import { fetchItems } from "../../redux/actions/itemActions";
import { useSelector, useDispatch } from "react-redux";

const MySearch = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const url = `${process.env.REACT_APP_PROD_URL}items?limit=20`;
      setLoading(true);
      await dispatch(fetchItems(url));
      setLoading(false);
    }
    fetchData();
  }, [dispatch]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = `${process.env.REACT_APP_PROD_URL}items?item_name=/^${search}/i&category=${category}&limit=20`;
    await dispatch(fetchItems(url));
    setLoading(false);
  };

  return (
    <>
      <Container>
        <Row className="my-5">
          <Col>
            <Form onSubmit={handleSearch}>
              <Row className="justify-content-center">
                <Col xs="4">
                  <Form.Group controlId="formGridSearch">
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="What item are you looking for?"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs="auto">
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control
                      size="sm"
                      as="select"
                      custom
                      onChangeCapture={(e) => setCategory(e.target.value)}
                    >
                      <option>Filter items by Category</option>
                      <option>Accessories</option>
                      <option>Clothes</option>
                      <option>Shoes</option>
                      <option>Home Decor</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs="auto">
                  <Form.Group controlId="formGridButton">
                    <Button
                      type="search"
                      size="sm"
                      id="search-button"
                      variant="outline-dark"
                    >
                      Search
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row className="m-auto w-50">
          <Col>
            {isLoading && <Spinner animation="border" variant="success" />}
          </Col>
        </Row>

        <Row className="my-5">
          {items.items &&
            items.items.map((item) => <Item key={item._id} item={item} />)}
        </Row>

        <div id="empty-div"></div>
      </Container>
    </>
  );
};

export default MySearch;
