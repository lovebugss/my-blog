import React from "react";
import './index.css'
import {
    Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Image
} from "react-bootstrap";

import Container from "react-bootstrap/Container";

const TopHeader = (props) => {
    return (
        <div>
            <div className="top-header">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Navbar bg="draw" expand="lg" variant="dark">
                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav>
                                        <Form inline>
                                            <FormControl type="text" placeholder="Search"
                                                         className="mr-sm-2 top-search"/>
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className="top-header-logo">
                <Container>
                    <Row>
                        <Col xl={3}>


                            <div className={"header-date"}>
                                <span>
                                    <i className={"fa fa-calendar"}></i>2020-02-16 15:30:01
                                </span>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <Col sm={12}>
                                <div className={"logo-header-inner"}>
                                    <a href="#">
                                        <Image
                                            src="https://demo.canyonthemes.com/bloge/wp-content/uploads/sites/14/2018/04/blogep-free.png"
                                        />
                                    </a>
                                </div>
                            </Col>
                        </Col>
                        <Col xl={3}>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};

export default TopHeader;