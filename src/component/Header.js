import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";



const Header = () =>{
    return <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand><Image width={"76px"}  alt="Home" src="https://cdn.dribbble.com/users/278707/screenshots/3893587/shadow-logo.png" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link >  <Link to="/">Inicio</Link> </Nav.Link>
          <Nav.Link >  <Link to="/compras">Compras</Link> </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}
export default Header;