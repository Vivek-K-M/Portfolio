import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { sectionDescription, sectionHeading } from '../../styles';
import { CgCPlusPlus } from 'react-icons/cg';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5, AiFillApi } from 'react-icons/ai';
import { ImCss3 } from 'react-icons/im';
import { GoDatabase } from 'react-icons/go';
import { DiMongodb } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import './styles.css';

const Skills = () => {

  const skills = [
    {
      skill: 'C++',
      icon: CgCPlusPlus,
    },
    {
      skill: 'JavaScript',
      icon: IoLogoJavascript,
    },
    {
      skill: 'HTML',
      icon: AiFillHtml5,
    },
    {
      skill: 'CSS',
      icon: ImCss3,
    },
    {
      skill: 'React.js',
      icon: FaReact,
    },
    {
      skill: 'MySQL',
      icon: GoDatabase,
    },
    {
      skill: 'MongoDB',
      icon: DiMongodb,
    },
    {
      skill: 'Node.js',
      icon: FaNodeJs,
    },
    {
      skill: 'REST API',
      icon: AiFillApi,
    },
  ];

  return (
    <div id='skills' className="skills">
      <Container 
        style={{
          padding: '8% 5%',
        }}
      >
        <Row className='align-items-center'>
          <span style={sectionHeading}>My Featured Skills</span>
          <h3 style={{...sectionDescription, textAlign: 'center'}}>My Proficiencies</h3>
        </Row>
        <Row className='align-items-center skill-box'>
          {
            skills && skills.map((item, index) => {
              return (
                <Col key={index} className='skill-wrap' id={index}>
                  <div className='skill-icon-box'><item.icon className='skill-icon' /></div>
                  <div className='skill-name'>{item.skill}</div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default Skills
