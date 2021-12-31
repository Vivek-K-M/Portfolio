import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bloggie from "../../../../assets/bloggie.png";
import wiggle from "../../../../assets/wiggle.png";
import edtech from "../../../../assets/edtech.png";
import medbed from "../../../../assets/medbed.PNG";
import './styles.css';
import ProjectCard from './projectCard/projectCard';

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
      breakpoint: 1160,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
};

const ProjectCarousel = () => {

  const projectsArray = [
    {
      imageurl: bloggie,
      description: "A Customizable Blogging Web Application along with Login/Signup functionalities made by using React.js, Node.js, Express, and MongoDB.",
      link: "https://bloggie388.herokuapp.com/",
      name: "Bloggie",
      // tech: [t[2], t[4], t[5], t[6]],
      github: "https://github.com/Vivek-K-M/Bloggie"
  },
  {
      imageurl: medbed,
      description: "Medbed provides you with the solution to know the availability or book a bed in nearby hospitals at a single click.",
      link: "https://github.com/Vivek-K-M/MedBed",
      name: "MedBed",
      // tech: [t[2], t[4], t[5], t[6]],
      github: "https://github.com/Vivek-K-M/MedBed"
  },
  {
      imageurl: wiggle,
      description: "A startup website showcasing your Branding and designing layout skills made by sing HTML, CSS, Bootstrap, and JavaScript.",
      link: "https://vivek-k-m.github.io/Wiggle-Startup-website-layout/",
      name: "Wiggle",
      // tech: [t[0], t[1], t[2], t[3]],
      github: "https://github.com/Vivek-K-M/Wiggle-Startup-website-layout"
  },
  {
      imageurl: edtech,
      description: "An EdTech website template using Front End Technologies like HTML, CSS, JavaScript, jQuery and Bootstrap.",
      link: "https://vivek-k-m.github.io/EdTech-Startup-website-layout/",
      name: "Krrany",
      // tech: [t[0], t[1], t[2], t[3]],
      github: "https://github.com/Vivek-K-M/EdTech-Startup-website-layout"
  }
  ]

  return (
    <Slider {...settings}>
      {
        projectsArray && projectsArray.map((item, index) => {
          return (
            <ProjectCard
              key={index} 
              id={index}
              title={item.name}
              description={item.description}
              imageurl={item.imageurl}
              githubLink={item.github}
            />
          );
        })
      }
    </Slider>
  )
}

export default ProjectCarousel
