import "./MyJumbotron3.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyJumbotron3 = () => {

  const user = localStorage.getItem("user");
  const first_name = JSON.parse(user).first_name;

  return (
    <>
      <div id="jumbotron3" className="jumbotron jumbotron-fluid p-0">
        <Container className="d-flex flex-column align-items-center">
          <Row>
            <Col>
              <h1 className="display-4 my-3">Welcome, {first_name} </h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Browse in Style Collection</h3>
              <p>
                A marketplace where you can buy and sell items with style.
                Fashion, home decor, accessories.
              </p>
              <p></p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="mb-1">
                {" "}
                If you are here to{" "}
                <strong>
                  <Link to="/addItem">Sell, add an item here.</Link>
                </strong>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyJumbotron3;
