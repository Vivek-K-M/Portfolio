import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { sectionDescription, sectionHeading } from '../../styles';
import AchievementCard from './achievementCard.jsx/achievementCard';
import './styles.css';
import codechefImg from '../../../assets/codechefIcon.svg';
import hackerrankImg from '../../../assets/hackerrankIcon.png';
import leetcodeImg from '../../../assets/leetcodeIcon.svg';
import hacktoberfestImg from '../../../assets/hacktoberfestIcon.svg';
import codingninjasImg from '../../../assets/codingninjasIcon.svg';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      }
    },
  ],
};

const Achievements = () => {

  const achievements = [
      {
        content: 'Enhanced the complexities of various algorithms in C++ and JavaScript.',
        link: '#',
        image: hacktoberfestImg,
      },
      {
        content: '2000+ Rating (5 Stars) on CodeChef problem solving contests.',
        link: `https://www.codechef.com/users/meliodas28`,
        image: codechefImg, 
      },
      {
        content: '1803+ Maximum contest rating and global reputation 325 on Leetcode global.',
        link: `https://leetcode.com/jinTaeJin/`,
        image: leetcodeImg,
      },
      {
        content: '3300+ Points (6 Stars) on HackerRank problem solving domain.',
        link: `https://www.hackerrank.com/vm388388`,
        image: hackerrankImg,
      },
      {
        content: 'Ranked 811/11366 globally in Leetcode Biweekly Contest 33.',
        link: `https://leetcode.com/contest/biweekly-contest-33/ranking/`,
        image: leetcodeImg,
      },
      {
        content: 'Ranked 101 globally in Codechef October Challenge 2020.',
        link: `https://www.codechef.com/OCT20`,
        image: codechefImg,
      },
      {
        content: 'Fourth position (out of 800 students) in Coding Ninjas contest.',
        link: `#`,
        image: codingninjasImg,
      },
  ];

  return (
    <div className="achievements" id="achievements">
      <Container
        style={{
          padding: '0 5% 8%',
        }}
      >
        <Row>
          <div style={sectionHeading} >Great AChievements</div>
          <h3 style={{...sectionDescription, textAlign: 'center'}}>Some of my Achievements</h3>
        </Row>
        <Slider {...settings}>
          {
            achievements && achievements.map((item, index) => {
              return <AchievementCard 
                id={index}
                key={index}
                link={item.link}
                description={item.content}
                image={item.image}
              />
            })
          }
        </Slider>
      </Container>
    </div>
  )
}

export default Achievements
