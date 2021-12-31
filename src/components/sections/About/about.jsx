import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../../../assets/aboutImg.svg';
import { sectionHeading, sectionDescription, sectionText} from '../../styles';
import './about.css';

const About = () => {
  return (
    <div id='about' className="about">
      <Container 
        style = {{
          padding: '8% 5%'
        }}
      >
        <Row className='align-items-center'>
          <Col lg={7} md={12} sm={12}>
            <img className='about-img' src={aboutImg} alt="aboutImage" />
          </Col>
          <Col lg={5} md={12} sm={12}>
            <span style={sectionHeading}>
              What Do I do?
            </span>
            <h3 style={sectionDescription}>
                I love to create Impeccable features in Web Applications
            </h3>
            <p style={sectionText}>I am a young and enthusiastic engineering graduate with a good command over Programming and Web Development. Well versed in Computer Fundamentals with a sound knowledge of data structures and algorithms. Willing to be part of a firm where I can upskill myself, learn new technologies and make impeccable features and applications everyday.</p>
            <div style={{color:'#17a2b8'}} className='highlight-skill'>Frontend Development</div>
            <div className='highlight-skill'>UI & UX design</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
