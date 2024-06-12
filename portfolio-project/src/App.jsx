import './App.css'
import githubLogo from './assets/github.svg'
import linkedin from './assets/linkedin.png'
import Paper from '@mui/material/Paper';

function App() {
  return (
    <>
      <div id="main">
        <div id="topPage">
            Hi, I'm <br/> 
            
            <div id="name">
                Chandrakanth Ashokraja
            </div>
            
            <div id="subtext">
                Artificial Intelligence & Machine Learning Enthusiast
            </div>
        </div>

        <div id="about">
            <div id="sub-heading">
                About Me
            </div>
            <div id="about-text"> 
                I am an AI and ML enthusiast with expertise in Deep Learning, Computer vision and Natural Language Processing.
                Winner of multiple hackathons, performed research on advanced AI topics and internship in Capgemini.
                Passionate about leveraging AI to solve complex problems and deliver high-quality results.
            </div>
        </div>

        <div id="experience">
            <div id="sub-heading">
                Experience
            </div>
            <div id="jobs">
                <div class="job">
                    <div class="comp-deets">
                        <p class="comp-name"> Capgemini Technology Services India Limited </p> <br/>
                        <p class="comp-role"> Deep Learning Intern </p> <br/>
                        <p class="comp-duration">June 2022 - December 2022 </p>
                    </div>
                    <div class="vl"></div>
                    <div class="job-short-descp">
                        <p class="short-descp">
                            Experimented and developed various deep learning models to detect dementia in elderly patients using longitudinal MRI scans and improved the accuracy and evaluation metrics by over 15% than existing models. <br/> 
                            <br/><b>Tech:</b> Tensorflow, Keras, Bash, ITK Snap, Slicer, Matplotlib, NumPy, Pandas, Scipy, Nibabel, FreeSurfer, FastSurfer & OpenCV.
                        </p>
                    </div>
                </div>
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
