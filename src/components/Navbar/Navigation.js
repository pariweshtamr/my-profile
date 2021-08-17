import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logoImg from '../../img/logo.png';

export const Navigation = () => {
    return (
        <div>
<Navbar bg="light" expand="lg" className="fixed-top">
  <Container>
    <Navbar.Brand href="#home"><img src={logoImg} alt="LOGO" width="50px"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto nav-text">
        <Nav.Link href="#about" className="nav-item">About</Nav.Link>
        <Nav.Link href="#skills" className="nav-item">Skills</Nav.Link>
        <Nav.Link href="#projects" className="nav-item">Portfolio</Nav.Link>
        <Nav.Link href="#contact" className="nav-item">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
