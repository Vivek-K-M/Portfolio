import React, { useState, useEffect } from 'react';
import { Container, Offcanvas } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import './styles.css';
import iconImg from '../../../../assets/icon.png';

const Navigation = () => {

  const [hamburgerNavbarShow, setHamburgerNavbarShow] = useState(false)
  const [navbarActive, setNavbarActive] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const setNavbar = () => {
      if(window.scrollY > 3) {
        setNavbarActive(true);
      }
      else {
        setNavbarActive(false);
      }
    }
    window.addEventListener('scroll', setNavbar);
    setNavbar();
    return () => window.removeEventListener('scroll', setNavbar);
  }, []);

  const showMenu = (event) => {
    event.preventDefault();
    setHamburgerNavbarShow(!hamburgerNavbarShow);
  }

  const handleClose = () => {
    setHamburgerNavbarShow(false);
  }

  return (
    <div id='navigation' className={navbarActive ? 'navbox navbox-active' : 'navbox'}>
      <Container className='nav-cont'
        style={{
          padding: '0 4%',
        }}
      >
        <a href='/'><img className='icon-box' src={iconImg} alt="icon-img" /></a>
        {
          windowSize.width <= 1200 ? <button onClick={showMenu} className='hamburger-icon'><GiHamburgerMenu /></button>
          : <ul className={navbarActive ? 'navbar-ul navbar-ul-active' : 'navbar-ul'}>
            <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="/" >HOME</a></li>
            <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="#about">ABOUT</a></li>
            <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="#projects">PROJECTS</a></li>
            <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="#experience">EXPERIENCE</a></li>
            <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="#skills">SKILLS</a></li>
            <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  style={{marginRight: '0'}} href="#contact">CONTACT</a></li>
          </ul>
        }

        {/* display for responsive navbar off-canvas */}
        {
          hamburgerNavbarShow && <Offcanvas show={hamburgerNavbarShow} onHide={handleClose} backdropClassName='backdrop-transition'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <a href='/'><img className='icon-box' src={iconImg} alt="icon-img" /></a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className='ham-ul'>
                <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="/" >HOME</a></li>
                <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="#about">ABOUT</a></li>
                <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="#projects">PROJECTS</a></li>
                <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="#experience">EXPERIENCE</a></li>
                <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  href="#skills">SKILLS</a></li>
                <li><a className={navbarActive ? 'nav-link nav-link-active' : 'nav-link'}  style={{marginRight: '0'}} href="#contact">CONTACT</a></li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        }
      </Container>
    </div>
  )
}

export default Navigation
