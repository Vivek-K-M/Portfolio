import React from "react";
import About from "../sections/About/about";
import Contact from "../sections/contact/contact";
import Experience from "../sections/experience/experience";
import Footer from "../sections/footer/footer";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from '../sections/home/home';
import Navigation from "../sections/home/navigation/navigation";
import Projects from "../sections/projects/projects";
import Skills from "../sections/skills/skills";
import Achievements from '../sections/achievements/achievements';


const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;