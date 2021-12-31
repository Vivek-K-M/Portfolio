import React from 'react';
import { sectionText } from '../../../../styles';
import './styles.css';

const ProjectCard = (props) => {
  return (
    <div className="card">
      <div className="project-card">
        <a href={props.githubLink} target='_blank' rel='noreferrer'>
          <img src={props.imageurl} alt="" className="card-img" />
        </a>
      </div>
      <h4 className="card-title">{props.title}</h4>
      <p style={{...sectionText, padding: '0'}} className="description">{props.description}</p>
      <a href={props.githubLink} className="github-btn" rel='noreferrer' target='_blank'>View on Github</a>
    </div>
  )
}

export default ProjectCard
