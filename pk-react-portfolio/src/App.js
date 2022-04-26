import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "./Components/Navigation";
import Sidebar from "./Components/Sidebar";
import Col from "react-bootstrap/Col";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Container>
                    <Row className="mt-3">
                        <Col md={3}>
                            <Sidebar />
                        </Col>
                        <Col md={9}>
                            <Routes>
                                <Route path="/" element={<About />} />
                                <Route
                                    path="/portfolio"
                                    element={<Portfolio />}
                                />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default App;
