import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logoImg from '../../img/logo.png';
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

export const Navigation = () => {
    return (
      <div className="nav-section">

<Navbar collapseOnSelect bg="light" expand="lg" className="fixed-top">
  <Container>
    <Link to="/"><img src={logoImg} alt="LOGO" width="50px"/></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto nav-text">
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/about">
        <Nav.Link>About</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/skills">
        <Nav.Link>Skills</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/projects">
          <Nav.Link>Portfolio</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
           
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
