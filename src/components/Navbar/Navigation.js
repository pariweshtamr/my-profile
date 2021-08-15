import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logoImg from '../../img/logo.png';

export const Navigation = () => {
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={logoImg} alt="LOGO" width="50px"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto nav-text">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
