import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'

export const Skills = () => {
    return (
        <Container>
            <Row>
                <Col>
                <div className="skills-title">
                <h1 className="name text-center">Skills</h1>
                </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="6" lg="4" >
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fab fa-html5 icon" style={{color: "orangered"}}></i>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold fs-5">HTML 5</h5>
                    </div>
                </div>
                </Col>
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fab fa-css3-alt icon" style={{color: "#2965f1"}}></i>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold fs-5">CSS 3</h5>
                    </div>

                </div>
                </Col>
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fab fa-js-square icon" style={{color: "#efd81d"}}></i>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold fs-5">Javascript</h5>
                    </div>
                </div>
                </Col>
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fab fa-react icon" style={{color: "#5ed3f3"}}></i>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold fs-5">React</h5>
                    </div>
                </div>
                </Col>          
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fab fa-node icon" style={{color: "#6aa05c"}}></i>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold fs-5">Node-JS</h5>
                    </div>
                </div>
                </Col>  
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fas fa-cogs icon" style={{color: "#c5de5a"}}></i>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bold fs-5">Problem Solving</h5>
                    </div>
                </div>
                </Col>
            </Row>
            
        </Container>
    )
}
