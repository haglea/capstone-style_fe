import "./MyJumbotron2.css";
import { Col, Container, Row } from "react-bootstrap";

const MyJumbotron2 = () => (
  <div id="jumbotron2" className="jumbotron jumbotron-fluid p-0">
    <Container className="d-flex flex-column align-items-center">
      <Row>
        <Col className="d-flex flex-row align-items-center">
          <h2>
            To browse, buy and sell, please <strong>log in</strong> or{" "}
            <strong>create an account</strong>.
          </h2>
        </Col>
      </Row>
    </Container>
  </div>
);

export default MyJumbotron2;
