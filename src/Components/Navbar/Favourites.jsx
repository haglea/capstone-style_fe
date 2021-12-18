import { Component } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { removeFromFav } from "../../redux/actions/favActions";
import { Link } from "react-router-dom";
import NavbarLogo from "./NavbarLogo";
import "./Favourites.css";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromFav: (item) => {
    dispatch(removeFromFav(item));
  },
});

class Favourites extends Component {
  render() {
    const currentItems = this.props.items.items.filter((item) =>
      this.props.likes.elements.includes(item._id)
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
              <h2>Your Favourites</h2>
            </Col>
          </Row>

          <Row className="my-5">
            {currentItems ? (
              currentItems.map((ci) => (
                <>
                  <Col md={3}>
                    <Card
                      id="item-card"
                      className="card-style d-flex flex-wrap"
                    >
                      <Link to={`/${ci._id}`}>
                        <Card.Img variant="center" src={ci.image} />
                      </Link>
                      <Badge pill variant="secondary" className="badge">
                        {ci.price} €
                      </Badge>
                      <Card.Body>
                        <Card.Title>
                          {ci.category}
                          <HeartFill
                            color="#FEC5BB"
                            className="mx-2"
                            onClick={() => this.props.removeFromFav(ci._id)}
                          />
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              ))
            ) : (
              <>
                <Col className="d-flex justify-content-center">
                  <h3>No items in favourites</h3>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
