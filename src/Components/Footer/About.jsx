import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarLogo from "../Navbar/NavbarLogo";
import "./About.css";
import MyFooter from "./MyFooter";

const About = () => (
  <Container>
    <NavbarLogo />
    <Row>
      <Col className="d-flex justify-content-center">
        <Card id="about-card" className="my-2">
          <Card.Body>
            <Card.Title className="my-2">About us</Card.Title>
            <Card.Subtitle className="my-2 text-muted">
              ... the story of Style
            </Card.Subtitle>
            <Card.Text className="my-2">
              Style offers a marketplace to buy and sell items and so give a
              second breath to loved items. It provides the marketplace where
              buyer and seller meet to buy the items with personality and style.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col className="d-flex justify-content-center">
        <Link to="/home">
          <Button className="ml-2" variant="primary" id="aboutus-button">
            {" "}
            Explore Style items
          </Button>
        </Link>
      </Col>
    </Row>
    <MyFooter />
  </Container>
);

export default About;
