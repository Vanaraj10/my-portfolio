import React from "react";
import "devicon/devicon.min.css";

const Skills = () => {
  return (
    <div>
      <center>
        <h2 className="text-amber-50 font-mono font-bold place-self-center hbhb text-3xl">
          My Skills
        </h2>
      </center>

      <div className="skills-grid mt-4">
        <div className="skill-card">
          <i className="devicon-html5-plain colored"></i>
          <p>
            <span>HTML</span> - The first thing I ever learned in web
            development. I started by creating simple web pages with headings,
            paragraphs, and images. Slowly understood how webpages are
            structured and built.
          </p>
        </div>
        <div className="skill-card">
          <i className="devicon-css3-plain colored"></i>
          <p>
            <span>CSS</span> - Learned CSS while styling those basic HTML pages.
            I loved experimenting with colors, buttons, and making my pages look
            clean. CSS taught me how small changes can make a big visual
            difference.
          </p>
        </div>
        <div className="skill-card">
          <i className="devicon-javascript-plain colored"></i>
          <p>
            <span>JavaScript</span> - Once I got comfortable with HTML & CSS, I
            dived into JavaScript to make my websites interactive. From simple
            click events to fetching data from APIs, JS became the brain of my
            web apps.
          </p>
        </div>
        <div className="skill-card">
          <i className="devicon-react-plain colored"></i>
          <p>
            <span>React Js</span> - React was a game-changer for me. I started
            learning it through YouTube tutorials while building small projects
            like a weather app. It taught me about components, states, and how
            to handle real-time data.
          </p>
        </div>
        <div className="skill-card">
          <i className="devicon-python-plain colored"></i>
          <p>
            <span>Python</span> - I learned Python as my first programming
            language in school. It felt easy and fun to work with. I used it to
            solve basic problems, then slowly moved on to projects and AI
            experiments.
          </p>
        </div>
        <div className="skill-card">
          <i className="devicon-pandas-plain white"></i>
          <p>
            <span>Pandas</span> - Picked up Pandas while learning data analysis
            in Python. It made handling large amounts of data super simple. I
            loved how quickly I could analyze and clean messy data with just a
            few lines of code.
          </p>
        </div>
        <div className="skill-card">
          <i className="devicon-cplusplus-plain colored"></i>
          <p>
            <span>C/C++</span>- I was introduced to C++ in school and later
            continued C in my engineering syllabus. It helped me understand
            programming fundamentals, memory management, and problem-solving.
          </p>
        </div>
        <div className="skill-card">
          <i className="devicon-gimp-plain colored"></i>
          <p>
            <span>Gimp</span> - Learned GIMP when I wanted to edit images for my
            projects and social media posters. It’s my go-to free tool for
            creating banners, thumbnails, and simple photo edits.
          </p>
        </div>
        <div className="skill-card">
          <i className="devicon-github-plain white"></i>
          <p>
            <span>Github</span> - Started using GitHub to store my projects
            online. I learned how to push code, manage repositories, and
            collaborate with others. It also helps me track my coding journey
            over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
