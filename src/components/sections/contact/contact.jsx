import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import { sectionHeading, sectionDescription, sectionText } from '../../styles';
import './styles.css';

const Contact = () => {
  return (
    <div id='contact' className="contact">
      <Container
        style={{
          padding: '8% 5%',
        }}
      >
        <Row>
          <Col xl={7} lg={6} md={12} sm={12} className='contact-left-col'>
            <div style={sectionHeading}>Contact Me</div>
            <h3 style={sectionDescription}>Connect With Me</h3>
            <Row style={{margin: '60px auto'}}>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}><BsLinkedin className='icon' /></Col>
                <Col>
                  <a href='https://www.linkedin.com/in/vivek-k-m/' target='_blank' rel='noreferrer' className='connect-link'>Connect on Linkedin</a>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}><BsGithub className='icon' /></Col>
                <Col>
                  <a href='https://github.com/Vivek-K-M' target='_blank' rel='noreferrer' className='connect-link'>Projects on Github</a>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={2} xs={2}><BsFacebook className='icon' /></Col>
                <Col>
                  <a href='https://www.facebook.com/coolvivek.mishra.3/' target='_blank' rel='noreferrer' className='connect-link'>Connect on Facebook</a>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col xl={5} lg={6} md={12} sm={12} className='contact-right-col'>
            <div style={sectionHeading}>Get In touch</div>
            <h3 style={sectionDescription}>Open to Work</h3>
            <div style={{...sectionText, margin: '50px auto'}}>
              I am a highly motivated engineering graduate with a passion for programming & Software Development and in-depth knowledge of 
              languages and development tools. Seeking a position in a dynamic, progressive and growth-oriented company where I can use my
               skills to the advantage of the company while having the scope to develop my own skills.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
