import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">P:\rashant\Ku.mar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features">Portfolio</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
