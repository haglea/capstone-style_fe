import { Badge, Navbar } from "react-bootstrap";
import "./NavbarLogo.css";
import { Link, useNavigate } from "react-router-dom";
import { HeartFill, Cart4 } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const NavbarLogo = ({ auth, logout }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const url = `${process.env.REACT_APP_DEV_URL}users/logout`;
    await logout(url);
    navigate("/");
  };

  return (
    <>
      <Navbar
        id="navbarwithlogo"
        className="justify-content-between"
        bg="light"
        variant="light"
      >
        <Navbar.Brand>
          <img id="navbarlogo" src="./logo_transparent.png" alt="" />
        </Navbar.Brand>
        <Navbar.Brand className="d-none d-md-block">
          <h6>
            <i>Style Marketplace</i>
          </h6>
        </Navbar.Brand>
        <div className="d-flex flex-row justify-content-end">
          <h5 className="d-flex flex-row">
            <Link to="/favourites" className="nav-link" id="favourites-link">
              <HeartFill size={24} color={"#FEC5BB"} />
            </Link>
            <Link to="/cart" className="nav-link">
              <Cart4 size={24} color={"black"} />
            </Link>
            <Badge className="m-2 p-2" pill onClick={() => handleLogout()}>
              {" "}
              Log out{" "}
            </Badge>
          </h5>
        </div>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  logout: (url) => dispatch(logout(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLogo);
