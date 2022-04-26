import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "./Components/Navigation";
import Sidebar from "./Components/Sidebar";
import MainComponent from "./Components/MainComponent";

function App() {
    return (
        <div className="App">
            {/* 
        Navbar
        Sidebar
        Window
      */}
            <Navigation />
            <Container>
                <Row>
                    <Sidebar />
                    <MainComponent />
                </Row>
            </Container>
        </div>
    );
}

export default App;
