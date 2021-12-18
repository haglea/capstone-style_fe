import { Col, Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";
import { Heart, HeartFill, Cart, CartFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { addToFav, removeFromFav } from "../../redux/actions/favActions";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (item) => dispatch(addToFav(item)),
  removeFromFavourites: (item) => dispatch(removeFromFav(item)),
  addToCart: (item) => dispatch(addToCart(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item)),
});

const Item = ({
  item,
  cart,
  likes,
  addToFavourites,
  removeFromFavourites,
  addToCart,
  removeFromCart,
}) => {
  const isFav = likes.elements.includes(item._id);
  const toggleFav = () => {
    isFav ? removeFromFavourites(item._id) : addToFavourites(item._id);
  };

  const isInCart = cart.elements.includes(item._id);
  const toggleCart = () => {
    isInCart ? removeFromCart(item._id) : addToCart(item._id);
  };

  return (
    <>
      <Col sm={6} md={4} lg={3}>
        <Card id="item-card" className="card-style d-flex flex-wrap">
          <Link to={`/${item._id}`}>
            <Card.Img variant="center" src={item.image} />
          </Link>
          <Badge pill variant="secondary" className="badge">
            {item.price} €
          </Badge>
          <Card.Body>
            <Card.Title>
              {item.category}
              {isFav ? (
                <HeartFill
                  id="heart-icon"
                  color="#FEC5BB"
                  size={22}
                  className="mx-2 my-4"
                  onClick={toggleFav}
                />
              ) : (
                <Heart
                  id="heart-icon-fill"
                  color="#FEC5BB"
                  size={22}
                  className="mx-2 my-4"
                  onClick={toggleFav}
                />
              )}
              {isInCart ? (
                <CartFill
                  id="cart-icon"
                  color="black"
                  size={26}
                  className="mx-2 my-4"
                  onClick={toggleCart}
                />
              ) : (
                <Cart
                  id="cart-icon-fill"
                  color="black"
                  size={26}
                  className="mx-2 my-4"
                  onClick={toggleCart}
                />
              )}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
