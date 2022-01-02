import React from 'react';
import { Col } from 'react-bootstrap';
import './styles.css';

const AchievementCard = (props) => {
  return (
    <Col className="card-wrap">
      <a target={props.link === `#` ? null : '_blank'} rel='noreferrer' href={props.link}>
        <div className="card-box">
          {/* <div className="card-img-box"> */}
            <img className='achievement-img' src={props.image} alt="" />
          {/* </div> */}
          <div className="card-description">{props.description}</div>
        </div>
      </a>
    </Col>
    
  )
};

export default AchievementCard;
