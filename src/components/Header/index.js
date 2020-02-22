import React from "react";
import {
    Navbar, Nav, NavDropdown, Container
} from 'react-bootstrap'
import './index.css'

const Index = () => {
    return (
        <div className="header-lower">
            <Container>


                <Navbar collapseOnSelect expand="lg" bg="right" variant="right">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link
                                href="#features"
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
};

export default Index;