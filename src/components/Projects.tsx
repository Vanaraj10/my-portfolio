import React from 'react'
import '../App.css'

const Projects = () => {
  return (
    <div>
         <div className="projects-container ">
        <h1 className="about-head">My Projects</h1>
        <p className="projects-intro text-white">
          Here are some of the cool things I’ve built recently combining
          creativity, code, and APIs to solve real problems 💡💻
        </p>
          <div className="project">
            <h2>Weather App ☁️</h2>
            <p>
              An Weather app using React js and OpenWeatherApi
            </p>
            <div className="link flex flex-row justify-center gap-5">
              <a href="https://github.com/Vanaraj10/weather-app">Source Code</a>
              <a href="https://starlight-weather.netlify.app/">Site Link</a>
            </div>
            <div className="technologies flex flex-row justify-center">
              <p>HTML/CSS</p>
              <p>JavaScript</p>
              <p>React Js</p>
            </div>
          </div>
          <div className="project">
            <h2>Quiz App 📝</h2>
            <p>
              An interactive quiz Site
            </p>
            <div className="link flex flex-row justify-center gap-5">
              <a href="https://github.com/Vanaraj10/Ez-quiz-generator">
                Source Code
              </a>
              <a href="https://rainbow-conkies-388bde.netlify.app//">
                Site Link
              </a>
            </div>
            <div className="technologies flex flex-row justify-center">
              <p>HTML/CSS</p>
              <p>JavaScript</p>
              <p>Api</p>
            </div>
          </div>
          <div className="project">
            <h2>StarLight AI 🤖</h2>
            <p>
              Ai chatbot Powered by Gemini Api
            </p>
            <div className="link flex flex-row justify-center gap-5">
              <a href="https://github.com/Vanaraj10/StarLight-Ai">Source Code</a>
              <a href="https://starlight-ai.netlify.app/">Site Link</a>
            </div>
            <div className="technologies flex flex-row justify-center">
              <p>React</p>
              <p>JavaScript</p>
              <p>GEMINI API</p>
            </div>
          </div>
          <div className="project">
            <h2>StarLight Elements 🧪</h2>
            <p>
              Web that tells you about Elements
            </p>
            <div className="link flex flex-row justify-center gap-5">
              <a href="https://github.com/Vanaraj10/starlight-elements">Source Code</a>
              <a href="https://starlight-elements.netlify.app/">Site Link</a>
            </div>
            <div className="technologies">
              <p>HTML</p>
              <p>JavaScript</p>
              <p>CSS</p>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Projects