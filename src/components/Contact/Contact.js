import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'

export const Contact = () => {
    return (
      <section className="contact-section" id="contact">
       <Container className="contact-card p-5">
           <Row>
           <div className="contact-title mb-5">
                <h1 className="name text-center">Contact</h1>
                </div>
           </Row>

           <Row>
               <Col lg={7}>
          <div className="contact-form px-4">
            <form>
              <div className="d-flex flex-column">
                <div className="input-group">
                  <input type="text" placeholder="Name" class="input-control" required></input>
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Email" class="input-control" required></input>
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Subject" class="input-control" required></input>
                </div>
                <div className="input-group">
                  <textarea placeholder="Message" class="input-control" required></textarea>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="bttn">Send Message</button>
                </div>
              </div>
            </form>
          </div>
               </Col>

               <Col>
               <div className="contact-info">
                   <div className="contact-info-item">
                       <h3>Email</h3>
                       <p>tamrpariwesh@gmail.com</p>
                   </div>
                   <div className="contact-info-item">
                       <h3>Phone</h3>
                       <p>0488 888 888</p>
                   </div>
                   
                   <div className="contact-info-item d-flex flex-column align-items-center">
                     <h3 className="mt-5" style={{color: "#e02f6b"}}>FOLLOW ME</h3>
                        <div className="icons">
                            <a className="git" href="https://github.com/pariweshtamr" target="_blank" rel="noreferrer"><i className="fab fa-github m-3"></i></a>
                            <a className="linked" href="https://www.linkedin.com/in/pariwesh-tamrakar-a33200217/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in m-3"></i></a>
                            <a className="tweet" href="https://twitter.com/Pariwesh15" target="_blank" rel="noreferrer"><i className="fab fa-twitter m-3"></i></a>
                            <a className="fb" href="https://www.facebook.com/pariweshtamr7/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f m-3"></i></a>
                            <a className="ig" href="https://www.instagram.com/pariwesh.tamrakar/" target="_blank" rel="noreferrer"><i className="fab fa-instagram m-3"></i></a>
                    </div>
                   </div>
               </div>
               </Col>
           </Row>
       </Container>
       </section>
    )
}
