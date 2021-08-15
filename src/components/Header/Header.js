import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../img/banner.png';

export const Header = () => {
    return (
        <Container fluid>
        <Row>
            <Col className="header-info mt-5 px-5">
                <h5>Hello, My name is</h5>
                <h1 className="name my-4">Pariwesh</h1>
                <p>I'm a full stack developer</p>

                <div className="icons mt-5">
                    <a href="#" target="_blank"><i className="fab fa-facebook-f m-3"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-instagram m-3"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-linkedin-in m-3"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-github m-3"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-twitter m-3"></i></a>
                </div>
            </Col>
            <Col className="header-img mt-5 px-5 d-flex justify-content-center">
                <img src={bannerImg} alt="Banner" width = "70%"/>
            </Col>
        </Row>
        </Container>

    )
}
