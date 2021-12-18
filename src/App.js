import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InitialPage from "./Components//InitialPage/InitialPage";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyHome from "./Components/HomePage/MyHome";
import About from "./Components/Footer/About";
import OurTeam from "./Components/Footer/OurTeam";
import ItemDetailsPage from "./Components/ItemDetailsPage/ItemDetailsPage";
import Favourites from "./Components/Navbar/Favourites";
import Cart from "./Components/Navbar/Cart";
import SellerPage from "./Components/Seller/SellerPage";

function App() {
  return (
    <Router>
      <Container fluid className="App">
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/home" element={<MyHome />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/addItem" element={<SellerPage />} />
          <Route path="/:itemID" element={<ItemDetailsPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
