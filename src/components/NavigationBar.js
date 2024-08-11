import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

function ImprovedNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="py-2 shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="font-weight-bold">EduCareAI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-3">About</Nav.Link>
            <Nav.Link href="#services" className="mx-3">Services</Nav.Link>
            <Nav.Link href="#contact" className="mx-3">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-2" />
            <Button variant="outline-primary"><FaSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ImprovedNavbar;