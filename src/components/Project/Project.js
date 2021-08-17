import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CR7 from '../../img/cr7.png';
import Lexus from '../../img/lexus.png';
import List from '../../img/list.png';
import Prank from '../../img/prankCal.png';
import Tribute from '../../img/tribute.png';
import Final from '../../img/final.png';
import Glass from '../../img/glass.png';
import Port from '../../img/port.png';
import PP2 from '../../img/pp2.png';

export const Project = () => {
    return (
    <Container>
        <Row>
            <Col>
            <div className="projects-title">
                <h1 className="name text-center">Projects</h1>
                </div>
            </Col>
        </Row>
        <Row className="py-5">
            <Col sm="12" md="6" lg="4">
            <div className="project-item">
                <div className="project-item-thumbnail">
                    <img src={CR7} alt="CR7 stats" height="200vh"/>
                </div>
                <div class="general-info">
                    <h3 className="project-item-title">CR7 stats page</h3>
                  <ul>
                    <li>Created - <span>4 Dec 2020</span></li>
                    <li>Technologies - <span>Html, Css</span></li>
                    <li>Role - <span>FrontEnd</span></li>
                  </ul>
                </div>
            </div>
            </Col>
            <Col sm="12" md="6" lg="4">
            <div className="project-item">
                <div className="project-item-thumbnail">
                    <img src={Tribute} alt="Tribute" height="200vh"/>
                </div>            
                <div class="general-info">
                    <h3 className="project-item-title">CR7 Tribute page</h3>
                  <ul>
                    <li>Created - <span>4 Dec 2020</span></li>
                    <li>Technologies - <span>Html, Css</span></li>
                    <li>Role - <span>FrontEnd</span></li>
                  </ul>
                </div>
            </div>
            </Col>
            <Col sm="12" md="6" lg="4">
            <div className="project-item">
                <div className="project-item-thumbnail">
                    <img src={Lexus} alt="Parallax" height="200vh"/>
                </div>
                <div class="general-info">
                    <h3 className="project-item-title">Parallax website</h3>
                  <ul>
                    <li>Created - <span>4 Dec 2020</span></li>
                    <li>Technologies - <span>Html, Css</span></li>
                    <li>Role - <span>FrontEnd</span></li>
                  </ul>
                </div>
            </div>
            </Col>
            <Col sm="12" md="6" lg="4">
            <div className="project-item">
                <div className="project-item-thumbnail">
                    <img src={List} alt="Not-to-do App" height="200vh"/>
                </div>
                <div class="general-info">
                    <h3 className="project-item-title">Not-to-do Application</h3>
                  <ul>
                    <li>Created - <span>4 Dec 2020</span></li>
                    <li>Technologies - <span>Html, Css</span></li>
                    <li>Role - <span>FrontEnd</span></li>
                  </ul>
                </div>
            </div>
            </Col>
            <Col sm="12" md="6" lg="4">
            <div className="project-item">
                <div className="project-item-thumbnail">
                    <img src={Prank} alt="Prank Calculator" height="200vh"/>
                </div>
                <div class="general-info">
                    <h3 className="project-item-title">Prank Calculator</h3>
                  <ul>
                    <li>Created - <span>4 Dec 2020</span></li>
                    <li>Technologies - <span>Html, Css</span></li>
                    <li>Role - <span>FrontEnd</span></li>
                  </ul>
                </div>
            </div>
            </Col>
            <Col sm="12" md="6" lg="4">
            <div className="project-item">
                <div className="project-item-thumbnail">
                    <img src={Final} alt="Portfolio" height="200vh"/>
                </div>
                <div class="general-info">
                    <h3 className="project-item-title"> My Portfolio #1</h3>
                  <ul>
                    <li>Created - <span>4 Dec 2020</span></li>
                    <li>Technologies - <span>Html, Css</span></li>
                    <li>Role - <span>FrontEnd</span></li>
                  </ul>
                </div>
            </div>
            </Col>
            <Col sm="12" md="6" lg="4">
            <div className="project-item">
                <div className="project-item-thumbnail">
                    <img src={Glass} alt="Portfolio" height="200vh"/>
                </div>
                <div class="general-info">
                    <h3 className="project-item-title"> My Portfolio #2</h3>
                  <ul>
                    <li>Created - <span>4 Dec 2020</span></li>
                    <li>Technologies - <span>Html, Css</span></li>
                    <li>Role - <span>FrontEnd</span></li>
                  </ul>
                </div>
            </div>
            </Col>
            <Col sm="12" md="6" lg="4">
            <div className="project-item">
                <div className="project-item-thumbnail">
                    <img src={Port} alt="Portfolio" height="200vh"/>
                </div>
                <div class="general-info">
                    <h3 className="project-item-title"> My Portfolio #3</h3>
                  <ul>
                    <li>Created - <span>4 Dec 2020</span></li>
                    <li>Technologies - <span>Html, Css, Javascript</span></li>
                    <li>Role - <span>FrontEnd</span></li>
                  </ul>
                </div>
            </div>
            </Col>
            <Col sm="12" md="6" lg="4">
            <div className="project-item">
                <div className="project-item-thumbnail">
                    <img src={PP2} alt="Portfolio" height="200vh"/>
                </div>
                <div class="general-info">
                    <h3 className="project-item-title"> My Portfolio #4</h3>
                  <ul>
                    <li>Created - <span>4 Dec 2020</span></li>
                    <li>Technologies - <span>Html, Css</span></li>
                    <li>Role - <span>FrontEnd</span></li>
                  </ul>
                </div>
            </div>
            </Col>
        </Row>
    </Container>
    )
}
