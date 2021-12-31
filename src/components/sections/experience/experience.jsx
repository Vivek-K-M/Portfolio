import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick';
import experienceImage from '../../../assets/experience.svg';
import { sectionDescription, sectionHeading, sectionText } from '../../styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
}

const Experience = () => {

  return (
    <div id='experience' className="experience">
      <Container
        style={{
          padding: '8% 5%',
        }}
      >
        <Row className='align-items-center'>
          <Col lg={7}>
            <img className='experience-img' src={experienceImage} alt="" />
          </Col>
          <Col lg={5}>
            <div className='section-head' style={sectionHeading}>Internship Experience</div>
            <h3 style={sectionDescription}>I have worked as</h3>
            <Slider {...settings}>
              <div className='slider-card'>
                <a href='https://www.antwak.com/' target='_blank' rel='noreferrer'><h3 className="company-name">Software developer Intern at AntWak</h3></a>
                <div style={sectionText}>Designed and maintained responsive webpages and components for an e-learning website and an Admin Portal using
                  ReactJS, Ant-Design, and CSS Flexbox. Incorporated different features like events and class
                  attendance for the website and enhanced the UI of the platform. Integrated GraphQL queries and REST APIs on the website using React hooks, Apollo Client and Redux.
                </div>
                <a href="https://www.antwak.com/" target='_blank' rel='noreferrer'  className="view-button">Visit Antwak</a>
              </div>
              <div className='slider-card'>
                <a href='https://placeprep.com/' target='_blank' rel='noreferrer'><h3 className="company-name">Technical problem setter at Placeprep</h3></a>
                <div style={sectionText}>Developed a modular course on Data Structures and Algorithms for Students and professionals using C++ and JavaScript. 
                  Created modular courses and set 90+ problem statements in order to enhance the quality of course for learners.</div>
                <a href="https://placeprep.com/" target='_blank' rel='noreferrer'  className="view-button">Visit Placeprep</a>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Experience
