import {
  Container,
  Row,
  Col /* OverlayTrigger, Tooltip */,
} from "react-bootstrap";
import "./MyFooter.css";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "react-bootstrap-icons";

const MyFooter = () => (
  <Container id="footer-styling">
    <Row className=" mt-5">
      <Col>
        <Link to="/about">
          <strong>About</strong>
        </Link>
      </Col>
      <Col>
        <a href="#navbar-style">
          {" "}
          <strong>Buyer</strong>
        </a>
      </Col>
      <Col>
        <Link to="#">
          {/*  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top"> Style Facebook  </Tooltip>}> */}
          <Facebook size={16} color={"black"} />
          {/* </OverlayTrigger> */}
        </Link>
      </Col>
    </Row>
    <Row className="">
      <Col>
        <Link to="/ourteam">Me & Style</Link>
      </Col>
      <Col>
        <Link to="/addItem">
          {" "}
          <strong>Seller</strong>
        </Link>
      </Col>
      <Col>
        <Link to="#">
          {/*   <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top"> Style Instagram </Tooltip>}> */}
          <Instagram size={16} color={"black"} />
          {/* </OverlayTrigger> */}
        </Link>
      </Col>
    </Row>
  </Container>
);

export default MyFooter;
