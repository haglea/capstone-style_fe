import MyNavbar from "../Navbar/MyNavbar";
import MyJumbotron from "./MyJumbotron";
import MyCarousel from "./MyCarousel";
import MyJumbotron2 from "./MyJumbotron2";
import InitialFooter from "../Footer/InitialFooter";
import { Container } from "react-bootstrap";
import Snow from "./Snow";

const InitialPage = () => {
  return (
    <Container id="snow-container">
      <Container style={{ overflowY: "hidden" }}>
        <MyNavbar />
        <Snow />
        <MyJumbotron />
      </Container>
      <MyCarousel />

      <MyJumbotron2 />
      <InitialFooter />
    </Container>
  );
};

export default InitialPage;
