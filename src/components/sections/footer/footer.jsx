import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { sectionText } from '../../styles';
import './styles.css';
import { FaLinkedinIn, FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {

  const year = new Date().getFullYear();
  const footerText = {
    ...sectionText,
    color: '#fff',
    padding: 'none',
    marginTop: '10px',
  }

  return (
    <div id='footer' className="footer">
      <Container
        style={{
          padding: '15px 5%',
        }}
      >
        <Row className='align-items-center'>
          <Col>
            <div className="icons-box">
              <a className='footer-icons-link' href='https://www.linkedin.com/in/vivek-k-m/' target='_blank' rel='noreferrer'><FaLinkedinIn className='footer-icons' /></a>
              <a className='footer-icons-link' href='https://www.facebook.com/coolvivek.mishra.3/' target='_blank' rel='noreferrer'><FaFacebookF className='footer-icons' /></a>
              <a className='footer-icons-link' href='https://github.com/Vivek-K-M' target='_blank' rel='noreferrer'><FaGithub className='footer-icons' /></a>
              <a className='footer-icons-link' href='https://www.instagram.com/_its._me._vivek/?hl=en' target='_blank' rel='noreferrer'><FaInstagram className='footer-icons' /></a>
            </div>
          </Col>
          <Col lg={4} className='footer-text'>
            <div style={footerText}>© {year} Made by Vivek Kumar Mishra</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
