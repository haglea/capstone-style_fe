import { Badge, Card, Col, Row } from "react-bootstrap";
import "./ItemDetails.css";
import { Heart, HeartFill, Cart, CartFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { addToFav, removeFromFav } from "../../redux/actions/favActions";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { addBid } from "../../redux/actions/bidActions";
import MyComments from "../Comments/MyComments";
import AddBidForm from "./AddBidForm";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (item) => dispatch(addToFav(item)),
  removeFromFavourites: (item) => dispatch(removeFromFav(item)),
  addToCart: (item) => dispatch(addToCart(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
  addBid: (item) => dispatch(addBid(item)),
});

const ItemDetails = ({
  item,
  cart,
  likes,
  bids,
  addBid,
  addToFavourites,
  removeFromFavourites,
  addToCart,
  removeFromCart,
}) => {
  let bid = "";
  const isFav = likes.elements.includes(item._id);
  const toggleFav = () => {
    isFav ? removeFromFavourites(item._id) : addToFavourites(item._id);
  };
  const isInCart = cart.elements.includes(item._id);
  const toggleCart = () => {
    isInCart ? removeFromCart(item._id) : addToCart(item._id);
  };

  const update = (values) => {
    addBid(values.bid);
  };

  return (
    <>
      <Col md={5} className="mr-5">
        <Card id="card-style-detail" className="d-flex flex-wrap">
          <Card.Img variant="top" src={item.image} />
          <Badge pill size="lg" variant="secondary">
            {item.price} €
          </Badge>
          <Card.Body className="d-flex flex-column justify-content-center mt-4">
            <Card.Title>
              {" "}
              <span className="mr-3 my-6">{item.category}</span>
              {isFav ? (
                <HeartFill
                  id="heart-icon"
                  color="#FEC5BB"
                  size={26}
                  className="mx-2 my-6"
                  onClick={toggleFav}
                />
              ) : (
                <Heart
                  id="heart-icon-fill"
                  color="#FEC5BB"
                  size={26}
                  className="mx-2 my-6"
                  onClick={toggleFav}
                />
              )}
              {isInCart ? (
                <CartFill
                  id="cart-icon"
                  color="black"
                  size={30}
                  className="mx-2 my-6"
                  onClick={toggleCart}
                />
              ) : (
                <Cart
                  id="cart-icon-fill"
                  color="black"
                  size={30}
                  className="mx-2 my-6"
                  onClick={toggleCart}
                />
              )}
            </Card.Title>
            <div
              className="d-flex flex-column p-10 m-6"
              style={{ height: "50px" }}
            ></div>
            <Card.Subtitle className="d-flex flex-column p-10 my-6">
              <h5>
                Current Top Bid:
                {bids.elements[0] ? (
                  <b className="ml-2">{bids.elements[0]}</b>
                ) : (
                  <b>No bids yet</b>
                )}
              </h5>
            </Card.Subtitle>
            <AddBidForm onSubmit={(values) => update(values)} />
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="d-flex justify-content-start flex-column mt-4">
        <Card id="card-style-detail2" className="mb-5 p-3">
          <Card.Title>
            <h3>{item.item_name}</h3>
          </Card.Title>
          <Card.Subtitle
            className="my-4 text-left"
            style={{ whiteSpace: "pre-wrap" }}
          >
            <h5>{item.description}</h5>
          </Card.Subtitle>
        </Card>

        <Row className="mt-5">
          <Col>
            <MyComments key={item._id} item={item} />
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
