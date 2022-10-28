import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <image className=""/>
        <h2> Hi, My Name is Bhavik Rajpal</h2>
        <div className="prompt">
          <p>A full stack developer and a keen Learner</p>
         <a href="https://www.linkedin.com/in/bhavik-rajpal-868427212/" style={{'text-decoration-lines':'none'}}><LinkedInIcon /></a>
          <a href="mailto:bhavik.sk.rajpal@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/bhavikrajpal49"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, 
              MySQL, MongoDB,  DigitalOcean, AWS S3, 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;