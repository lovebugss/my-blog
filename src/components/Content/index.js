import React from "react";
import {
    Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Image,Container,Jumbotron
} from "react-bootstrap";
import './index.css'

export default () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xm={12} xl={8}>
                        <div className="boxed">
                            <div
                            >
                                <Image
                                    src={"https://demo.canyonthemes.com/bloge/wp-content/uploads/sites/14/2017/11/men-2425121_12801.jpg"}>
                                </Image>
                                <h2 className="entry-title">hahhaha</h2>
                                <div className="entry-mate">
                                    <span>Posted on </span>
                                </div>
                                <div
                                    className="entry-content"
                                >
                                    <p>Lorem Ipsum është një tekst shabllon i industrisë së printimit dhe shtypshkronjave. Lorem Ipsum ka qenë teksti shabllon i industrisë që nga vitet 1500, kur një shtypës i panjohur morri një galeri shkrimesh dhe i ngatërroi për të krijuar një libër mostër. Teksti i ka mbijetuar jo vetëm pesë shekujve, por edhe kalimit në shtypshkrimin…</p>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xm={0} xl={4}>

                    </Col>
                </Row>
            </Container>
        </div>

    )
}