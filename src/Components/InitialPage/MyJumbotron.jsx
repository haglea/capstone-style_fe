import "./MyJumbotron.css";
import { Col, Container, Row } from "react-bootstrap";

const MyJumbotron = () => (
  <div id="jumbotron" className="jumbotron jumbotron-fluid p-0">
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col className="d-flex flex-row align-items-center">
          <h1 className="display-4 my-3">Style</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-row align-items-center">
          <h3>Your new favorite marketplace</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="mb-1">
            {" "}
            <strong>Buy</strong> & <strong>Sell</strong> your favorite pieces.
            Fashion, home decor, accessories.
          </p>
          <p>A marketplace where you can buy and sell items with style.</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default MyJumbotron;
