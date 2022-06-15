import React from "react";
import {Navbar , Nav , Container ,Form,Button } from "react-bootstrap"

function Header() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">無名程式站</Navbar.Brand>
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