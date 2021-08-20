import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../img/banner.png';

export const Header = () => {
    return (
        <section className="header-section">
        <Container fluid>
        <Row>
            <Col className="header-info mt-5 px-5">
                <h5>Hello, My name is</h5>
                <h1 className="name my-4">Pariwesh</h1>
                <p>I'm a full stack developer</p>

                <div className="icons mt-5">
                            <a className="git" href="https://github.com/pariweshtamr" target="_blank" rel="noreferrer"><i className="fab fa-github m-3"></i></a>
                            <a className="linked" href="https://www.linkedin.com/in/pariwesh-tamrakar-a33200217/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in m-3"></i></a>
                            <a className="tweet" href="https://twitter.com/Pariwesh15" target="_blank" rel="noreferrer"><i className="fab fa-twitter m-3"></i></a>
                            <a className="fb" href="https://www.facebook.com/pariweshtamr7/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f m-3"></i></a>
                            <a className="ig" href="https://www.instagram.com/pariwesh.tamrakar/" target="_blank" rel="noreferrer"><i className="fab fa-instagram m-3"></i></a>
                </div>
            </Col>
            
            <Col className="header-img mt-5 px-5 d-flex justify-content-center">
                <img src={bannerImg} alt="Banner" width = "60%"/>
            </Col>
        </Row>
        </Container>
        </section>

    )
}
