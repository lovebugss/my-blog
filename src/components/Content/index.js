import React from "react";
import {
    Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, Container, Jumbotron
} from "react-bootstrap";
import Boxed from './Boxed'
import './index.css'
import {Secondary} from "../index";

const generatorAriList = (data) => {
    return data
}

export default () => {
    const data = [{
        "title": "Docker下安装RabbitMQ",
        "createTime": "2020-02-20 12:00:00",
        "author": "renjp",
        "ctr": "100",
        "tag": "JAVA",
        "content": "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        "url": "#",
        "imageUrl": "https://demo.canyonthemes.com/bloge/wp-content/uploads/sites/14/2017/11/men-2425121_12801.jpg",
    }, {
        "title": "Docker下安装RabbitMQ",
        "createTime": "2020-02-20 12:00:00",
        "author": "renjp",
        "ctr": "100",
        "tag": "JAVA",
        "content": "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        "url": "#",
        "imageUrl": "https://demo.canyonthemes.com/bloge/wp-content/uploads/sites/14/2017/11/men-2425121_12801.jpg",
    }, {
        "title": "Docker下安装RabbitMQ",
        "createTime": "2020-02-20 12:00:00",
        "author": "renjp",
        "ctr": "100",
        "tag": "JAVA",
        "content": "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        "url": "#",
        "imageUrl": "https://demo.canyonthemes.com/bloge/wp-content/uploads/sites/14/2017/11/men-2425121_12801.jpg",
    }];
    const c = data.map(d => {
        return (<Boxed {...d} />)
    });
    return (
        <div className="content">
            <Container>
                <Row>
                    <Col xm={12} xl={8}>
                        {c}
                    </Col>
                    <Col xm={0} xl={4}>
                        <Secondary/>

                    </Col>
                </Row>
            </Container>
        </div>

    )
}