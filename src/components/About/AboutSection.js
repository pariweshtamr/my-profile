import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import aboutImg from '../../img/about.png'



export const AboutSection = () => {
    return (
            <Container fluid>
            <Row>
                <Col>
                <div className="about-img d-flex px-5 mt-4 justify-content-center">
                    <img src={aboutImg} alt="abt" width="80%" />
                </div>
                </Col>
               
                <Col>
                <div className="about-info">
                <h1 className="name text-end px-5 text-center">About</h1>
                </div>

                <div className="cards py-5 mx-5">                                           
                <p className="px-5 fs-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, praesentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci.</p>  
                <p className="px-5 pfs-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, praesentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci.</p>                                                              
                </div>
                </Col>
            </Row>
            </Container> 
    )
}
