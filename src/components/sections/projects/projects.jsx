import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { sectionDescription, sectionHeading } from '../../styles';
import ProjectCarousel from './projectsCarousel/projectCarousel';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <Container
        style = {{
          padding: '8% 5%',
        }}
      >
        <Row className='align-items-center'>
          <span style={{...sectionHeading}}>My Projects</span>
          <h3 style={{...sectionDescription, textAlign: 'center'}}>Some of My Projects</h3>
        </Row>
        <ProjectCarousel />
      </Container>
    </div>
  )
}

export default Projects
