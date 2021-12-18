import { Component } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import NavbarLogo from "./NavbarLogo";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item) => {
    dispatch(removeFromCart(item));
  },
});

class Cart extends Component {
  render() {
    const currentItems = this.props.items.items.filter((item) =>
      this.props.cart.elements.includes(item._id)
    );
    return (
      <>
        <Container className="m-auto">
          <NavbarLogo />

          <Row className="my-5">
            <Col className="d-flex justify-content-start">
              <Link to="/home">
                <Button
                  className="ml-2"
                  variant="primary"
                  id="itemdetail-button"
                >
                  {" "}
                  Back
                </Button>
              </Link>
            </Col>
          </Row>

          <Row className="my-5">
            <Col className="d-flex justify-content-center">
              <h2>Your Shopping Cart</h2>
            </Col>
          </Row>

          <Row className="my-5">
            {currentItems ? (
              currentItems.map((ci) => (
                <Col md={3}>
                  <Card id="item-card" className="card-style d-flex flex-wrap">
                    <Link to={`/${ci._id}`}>
                      <Card.Img variant="left" src={ci.image} />
                    </Link>
                    <Badge pill variant="secondary" className="badge">
                      {ci.price} €
                    </Badge>
                    <Card.Body className="d-flex flex-row justify-content-center">
                      <Card.Title>
                        <span>{ci.category}</span>
                        <CartFill
                          color="black"
                          size={24}
                          className="mx-3"
                          onClick={() => this.props.removeFromCart(ci._id)}
                        />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col className="d-flex justify-content-center">
                <h3>No items in cart</h3>
              </Col>
            )}
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
