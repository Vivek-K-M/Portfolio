import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import programmingImg from '../../../assets/programming.svg';
import ReactRotatingText from 'react-rotating-text';
import homeBackground from '../../../assets/homeBackground.svg';

const Home = () => {

  const alternatingStrings = ["I am a Web Developer ", "I work on JavaScript ", "Technology enthusiast ", "Love to learn new tech ", "I am open to work "]

  return (
    <div className="home">
      <Container 
        style={{
          padding: '10% 5% 10%'
        }}
      >
        <div className="bubbles b1"></div>
        <div className="bubbles b2"></div>
        <div className="bubbles b3"></div>
        <div className="bubbles b4"></div>
        <div className="bubbles b5"></div>
        <div className="bubbles b6"></div>
        <img className='homeBackground' src={homeBackground} alt="" />
        <Row className="align-items-center">
          <Col className='home-left' xl={6}>
            <h2 >
              Hey there!
              <br />
              I'm Vivek Mishra
              Web <span className='web-dev-text'> Developer</span>
            </h2>
            <span className="alternating-text">
              <ReactRotatingText typingInterval={60} deletingInterval={30} pause={500} emptyPause={500} items={alternatingStrings} />
            </span>
            <a href='#contact' className="hire-link">Hire me</a>
          </Col>
          <Col xl={6}>
            <img className='programming-img' src={programmingImg} alt="programmingImage" />
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}

export default Home;
