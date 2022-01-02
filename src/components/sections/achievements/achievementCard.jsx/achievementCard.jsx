import React from 'react';
import './styles.css';

const AchievementCard = (props) => {
  return (
    <div className="card-wrap">
      <a target={props.link === `#` ? null : '_blank'} rel='noreferrer' href={props.link}>
        <div className="card-box">
          {/* <div className="card-img-box"> */}
            <img className='achievement-img' src={props.image} alt="" />
          {/* </div> */}
          <div className="card-description">{props.description}</div>
        </div>
      </a>
    </div>
    
  )
};

export default AchievementCard;
