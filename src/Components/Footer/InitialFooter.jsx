import {
  Container,
  Row,
  Col /* OverlayTrigger, Tooltip */,
} from "react-bootstrap";
import "./InitialFooter.css";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "react-bootstrap-icons";

const InitialFooter = () => (
  <Container id="initialfooter-styling">
    <Row>
      <Col>
        <Link to="#">
          {/*  <OverlayTrigger key='top' placement='top' overlay={<Tooltip id="tooltip-top"> Style Facebook  </Tooltip>}> */}
          <Facebook size={38} className="mx-5 my-3" />
          {/* </OverlayTrigger> */}
        </Link>

        <Link to="#">
          {/*  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top"> Style Instagram </Tooltip>}> */}
          <Instagram size={38} className="mx-5 my-3" />
          {/*  </OverlayTrigger> */}
        </Link>
      </Col>
    </Row>
  </Container>
);

export default InitialFooter;
