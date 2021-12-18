import NavbarLogo from "../Navbar/NavbarLogo";
import MyJumbotron3 from "./MyJumbotron3";
import MyFooter from "../Footer/MyFooter";
import { Container } from "react-bootstrap";
import "./MyHome.css";
import MySearch from "./MySearch";

const MyHome = () => {
  return (
    <Container id="home-container">
      <NavbarLogo />
      <MyJumbotron3 />
      <MySearch />
      <MyFooter />
    </Container>
  );
};

export default MyHome;
