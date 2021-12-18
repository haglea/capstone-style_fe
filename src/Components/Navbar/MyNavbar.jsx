import { Badge, Navbar, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./MyNavbar.css";
import LoginForm from "../Login/LoginForm";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyNavbar = ({ auth, loginUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const submit = async (values) => {
    const url = `${process.env.REACT_APP_DEV_URL}users/login`;
    await loginUser(url, values.email, values.password);   
    handleClose();
    navigate("/home");
  };

  return (
    <>
      <Navbar
        id="navbar-style"
        variant="light"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand>
          <img id="navbar-logo" src="./logo_transparent.png" alt="" />
        </Navbar.Brand>
        <div className="d-flex justify-content-end">
          <h5>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip className="m-1" id="tooltip-bottom">
                  {" "}
                  Log in{" "}
                </Tooltip>
              }
            >
              <Badge className="m-2 p-2" pill onClick={() => handleShow()}>
                Log in
              </Badge>
            </OverlayTrigger>
            {/* <OverlayTrigger placement="bottom" overlay={<Tooltip className="m-1" id="tooltip-bottom"> Sign up </Tooltip>}> */}
            <Badge className="m-2 p-2" pill bg="transparent">
              Sign up
            </Badge>
            {/* </OverlayTrigger> */}
          </h5>
        </div>
      </Navbar>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Log in to Style
          </Modal.Title>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => handleClose()}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className="ml-5">
          <LoginForm onSubmit={(values) => submit(values)} />
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  loginUser: (url, email, password) =>
    dispatch(loginUser(url, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
