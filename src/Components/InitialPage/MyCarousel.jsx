import { Carousel, Col, Row } from "react-bootstrap";
import "./MyCarousel.css";
import { useEffect } from "react";
import { fetchItems } from "../../redux/actions/itemActions";
import { useSelector, useDispatch } from "react-redux";

const MyCarousel = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const url = `${process.env.REACT_APP_PROD_URL}items?limit=20`;
      await dispatch(fetchItems(url));
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      {items.items.length > 0 ? (
        <Carousel
          id="carousel-styling"
          interval={5000}
          fade
          indicators={false}
          pause="hover"
        >
          <Carousel.Item>
            <Row>
              {/* {isLoading && <Col><MySpinner /></Col>}   */}
              {items.items.slice(0, 4).map((item) => (
                <Col sm={6} lg={3} key={item._id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p>{item.price} €</p>
                    <p>{item.category}</p>
                  </Carousel.Caption>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              {items.items.slice(4, 8).map((item) => (
                <Col sm={6} lg={3} key={item._id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p>{item.price} €</p>
                    <p>{item.category}</p>
                  </Carousel.Caption>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              {items.items.slice(8, 12).map((item) => (
                <Col sm={6} lg={3} key={item._id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p>{item.price} €</p>
                    <p>{item.category}</p>
                  </Carousel.Caption>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              {items.items.slice(12, 16).map((item) => (
                <Col sm={6} lg={3} key={item._id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p>{item.price} €</p>
                    <p>{item.category}</p>
                  </Carousel.Caption>
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              {items.items.slice(16, 20).map((item) => (
                <Col sm={6} lg={3} key={item._id}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p>{item.price} €</p>
                    <p>{item.category}</p>
                  </Carousel.Caption>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      ) : (
        <></>
      )}
    </>
  );
};

export default MyCarousel;
