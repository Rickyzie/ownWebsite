import React from "react";
import {Navbar , Nav , Container } from "react-bootstrap"

function Header() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">RipOff</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/feature">Feature</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default Header;