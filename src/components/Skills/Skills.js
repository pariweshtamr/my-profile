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
                        <i className="fab fa-html5 icon"></i>
                    </div>
                </div>
                </Col>
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fab fa-css3-alt icon"></i>
                    </div>
                </div>
                </Col>
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fab fa-js-square icon"></i>
                    </div>
                </div>
                </Col>
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fab fa-react icon"></i>
                    </div>
                </div>
                </Col>          
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fab fa-node icon"></i>
                    </div>
                </div>
                </Col>  
                <Col sm="12" md="6" lg="4">
                <div className="skills-card cards rounded">
                    <div className="skills-icon text-center py-4">
                        <i className="fas fa-cogs icon"></i>
                    </div>
                </div>
                </Col>
            </Row>
            
        </Container>
    )
}
