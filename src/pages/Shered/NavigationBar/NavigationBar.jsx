import React from "react";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";



const NavigationBar = () => {

  const {user} = useContext(AuthContext)

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="ps-3 text-decoration-none">Home</Link>
              <Link className="ps-3 text-decoration-none">About</Link>
              <Link className="ps-3 text-decoration-none">Career</Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle className="display-6" />
                </Nav.Link>
              )}
              {
                user ? <Button variant="secondary">LogOut</Button> :
                <Link to="/login">  <Button variant="secondary">Login</Button> </Link>
              }
                
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
