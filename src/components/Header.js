
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {  Outlet ,Link } from "react-router-dom";
import CartBtn from "./CartBtn";
import Login from "./Login";
import Signup from "./Signup";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/inicio">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/product">
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/info" >
                Info
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto" >
                Contacto
              </Nav.Link>
              <NavDropdown
                title="Horarios de Atencion"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  lunes-CERRADO
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Martes = 12:00PM - 11:00pm
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Miercoles = 12:00PM - 11:00pm
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Jueves = 12:00PM - 11:00pm
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Viernes = 12:00PM - 1:00pm
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Sabado = 12:00PM - 1:00pm
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Domingo = 12:00PM - 6:00pm
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Brand className="navbar-brand mx-auto fw-bold" href="#">
              LOGO
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
        <div className="d-flex">
          <Login />
          <Signup />
          <CartBtn/>
        </div>
      </Navbar>


      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default Header;
