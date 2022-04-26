import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/">P:\rashant\Ku.mar</Navbar.Brand>
                <Nav>
                    {/* <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#features">Portfolio</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link> */}
                    <Link to="/">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
