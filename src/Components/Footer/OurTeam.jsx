import {
  Button,
  Card,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarLogo from "../Navbar/NavbarLogo";
import "./OurTeam.css";
import { CSSTransition } from "react-transition-group";
import { Github, Envelope, Linkedin } from "react-bootstrap-icons";
import { useState } from "react";

const OurTeam = () => {
  const [showImage, setShowImage] = useState(true);
  const [showText, setShowText] = useState(false);

  return (
    <Container id="ourteam-container">
      <NavbarLogo />
      <Row>
        <Col md={12} className="d-flex justify-content-center">
          {showImage && (
            <Card
              onClick={() => setShowText(true)}
              id="ourteam-card"
              className="my-2"
            >
              <Card.Body>
                <img variant="top" src="./profile_picture_Lea.jpg" />
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      <Row>
        <Col md={12} className="d-flex justify-content-center">
          <CSSTransition
            in={showText}
            timeout={300}
            classNames="alert"
            unmountOnExit
            onEnter={() => setShowImage(false)}
            onExited={() => setShowImage(true)}
          >
            <Card
              onClick={() => setShowText(false)}
              className="my-2"
              id="ourteam-card2"
              className="d-flex flex-wrap"
            >
              <Card.Body>
                <Card.Title className="my-2">
                  <b>Lea Hagovska</b>
                </Card.Title>
                <Card.Text className="mt-4">
                  <p>Full Stack Web Development May21 Batch</p>
                  <p>Style is my Strive School Capstone Project</p>
                </Card.Text>
                <Card.Subtitle className="my-2 text-muted">
                  Bootstrap, ReactJS, Redux
                </Card.Subtitle>
                <Card.Subtitle className="my-2 text-muted">
                  NodeJS, Express, MongoDB
                </Card.Subtitle>
                <Card.Text className="mt-4">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top"> haglea </Tooltip>}
                  >
                    <a
                      href="https://github.com/haglea"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <Github />{" "}
                    </a>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-top"> haglea@icloud.com </Tooltip>
                    }
                  >
                    <a
                      href="mailto:haglea@icloud.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <Envelope />
                    </a>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Lea Hagovska </Tooltip>}
                  >
                    <a
                      href="https://www.linkedin.com/in/leahagovska/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin />{" "}
                    </a>
                  </OverlayTrigger>
                </Card.Text>
              </Card.Body>
            </Card>
          </CSSTransition>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center mt-5">
          <Link to="/home">
            <Button className="ml-2" variant="primary" id="ourteam-button">
              {" "}
              Explore Style items
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <div id="ourteam-emptydiv"></div>
      </Row>
    </Container>
  );
};

export default OurTeam;
