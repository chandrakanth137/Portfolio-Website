import { useState } from 'react'
import githubLogo from './assets/github.svg'
import linkedin from './assets/linkedin.png'
import './App.css'

function App() {
  return (
    <>
      <div id="main">
        <div id="topPage">
          <div id="top-page-contact-info">
              <div id="contact">
                  <img id="github-icon" src={githubLogo}></img> 
                  <a id="github-text" href="https://github.com/chandrakanth137"> chandrakanth137 </a>
                  <img id="linkedin-icon" src={linkedin}></img> 
                  <a id="linkedin-text" href="https://www.linkedin.com/in/a-chandrakanth/"> Chandrakanth A </a>
              </div>
            
          </div>
            Hi, I'm
            <br/> 
            <div id="name">
                Chandrakanth Ashokraja
            </div>
            <div id="subtext">
                AI & ML Enthusiast
            </div>
        </div>

        <div id="intro">
            <div id="intro-heading">
                About Me
            </div>
            <div id="intro-text"> 
                I am an AI and ML enthusiast with expertise in Deep Learning, Computer vision and Natural Language Processing.
                Winner of multiple hackathons, performed research on advanced AI topics and internship in Capgemini.
                Passionate about leveraging AI to solve complex problems and deliver high-quality results.
            </div>
        </div>

        <div id="experience">
            <div id="experience-heading">
                Experience
            </div>
        </div>

        <div id="achievements">
        </div>

        <div id="education">
        </div>

        <div id="certifications">
        </div>
    </div>
    </>
  )
}

export default App
