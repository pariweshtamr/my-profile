import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import aboutImg from '../../img/abt.png'



export const AboutSection = () => {
    return (
            <Container>
            <Row>
                <Col>
                <div className="about-img d-flex align-items-center justify-content-center">
                    <img src={aboutImg} alt="abt" width="80%" />
                </div>
                </Col>
               
                <Col lg={7}>
                <div className="about-title">
                <h1 className="name text-end py-3 text-center">About</h1>
                </div>

                <div className="cards py-4 lh-lg">                                           
                <p className="px-5 fs-6 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, praesentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci.</p>  
                <p className="px-5 pfs-6"> Lorem ipsum dolor sit am iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci. sentium enim fugit totam nobis velit? Quae, beatae, impedit ut dolore amet hic enim iusto voluptas sint, cumque tempora illo adipisci.</p>                                                              
                </div>
                </Col>
            </Row>
            </Container> 
    )
}
