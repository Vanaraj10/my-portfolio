import "./App.css";
import blue_robo from "./assets/blue_robo.jpg";
import my_photo from "./assets/vj_photo.jpg";
import "devicon/devicon.min.css";
import { FaGithub, FaLinkedin, FaReddit, FaEnvelope } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <center>
      {/*-----Top bar-----*/}
      <div className="flex flex-col">
        <img
          src={blue_robo}
          className="w-10 rounded-full place-self-center profile"
          alt=""
        />
        <h2 className="font-mono font-bold text-4xl place-self-center text-amber-50 mt hello">
          Hello, I'M
        </h2>
        <h2 className="font-mono font-bold text-4xl place-self-center text-amber-50">
          V J
        </h2>
      </div>

      <div className="w-48 place-self-center h-48 rounded-full border-4 border-cyan-300 shadow-lg shadow-cyan-500/50 mx-auto transform hover:scale-105 transition duration-300 profile-div">
        <img
          src={my_photo}
          alt="Profile"
          className="w-full h-full object-cover my-photo rounded-full "
        />
        <p className="text-amber-50 margin">CS Student | Ai Enthusiast</p>
      </div>

      <div className="flex gap-10  justify-center text-2xl social">
        <a
          href="https://github.com/Vanaraj10"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size={37} />
        </a>
        <a
          href="www.linkedin.com/in/vanaraj-p-372405306"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={37} />
        </a>
        <a
          href="https://www.reddit.com/user/VJ_2303"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaReddit size={37} />
        </a>
        <a href="mailto:vanaraj1018@gmail.com" rel="noopener noreferrer">
          <FaEnvelope size={37} />
        </a>
      </div>
      </center>

      {/* ----About----- */}
      <h2 className="text-amber-50 about-head">I like building things.</h2>
      <p className="text-amber-50 about-text">
        I’m a Computer Science Engineering student with a passion for Artificial
        Intelligence, Machine Learning, and modern software development. I enjoy
        building real-world projects using Python and C++, from training
        chatbots to developing intelligent systems. Currently exploring
        technologies that power the Industry 4.0 revolution, I aim to create
        solutions that are smart, efficient, and impactful.
      </p>

      <h1 className="about-head">About Me...</h1>

      <div className="grid-container">
        <div className="grid-item">
          <h3 className="about-title">I'm Vanaraj P</h3>
          <p>On a mission to build the future 💻</p>
        </div>
        <div className="grid-item">
          <h3 className="about-title">Age</h3>
          <p>
            Built in 2007, updated daily <br></br>🚀
          </p>
        </div>
        <div className="grid-item">
          <h3 className="about-title">Education</h3>
          <p>BE - Computer Science Engineering</p>
        </div>
        <div className="grid-item">
          <h3 className="about-title">Location</h3>
          <p>Coimbatore, India</p>
        </div>
        <div className="grid-item">
          <h3 className="about-title">Interests</h3>
          <p>Web Dev, AI, Cloud</p>
        </div>
        <div className="grid-item">
          <h3 className="about-title">Goal</h3>
          <p>To build impactful AI</p>
        </div>
      </div>

      <div className="projects-container ">
        <h1 className="about-head">My Projects</h1>
        <p className="projects-intro text-white">
          Here are some of the cool things I’ve built recently combining
          creativity, code, and APIs to solve real problems 💡💻
        </p>
        <div className="project-carousal">
          <div className="project">
            <h2>Weather App ☁️</h2>
            <p>
              I build an weather app that fetches weather information from
              openweatherApi and display the results in the page, this project
              help me to learn web devolopment
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
              I build an QUIZ generator app using HTML/CSS/JS and OpenTriviaApi
              , The user can select the quiz topic and the backend fetchess the
              quiz and display it in the web
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
              I build an weather app that fetches weather information from
              openweatherApi and display the results in the page, this project
              help me to learn web devolopment
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
              I build an Web app that holds the informations of the all 118
              elements from the elementry table,When user entr for an element
              that website shows the information about that element
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

      <center><h2 className="text-amber-50 font-mono font-bold place-self-center hbhb text-3xl">My Skills</h2></center>

      <div className="skills-grid">
        <div className="skill-card">
          <i className="devicon-html5-plain colored"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <i className="devicon-css3-plain colored"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <i className="devicon-javascript-plain colored"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <i className="devicon-react-plain colored"></i>
          <p>React JS</p>
        </div>
        <div className="skill-card">
          <i className="devicon-python-plain colored"></i>
          <p>Python</p>
        </div>
        <div className="skill-card">
          <i className="devicon-pandas-plain white"></i>
          <p>Pandas</p>
        </div>
        <div className="skill-card">
          <i className="devicon-cplusplus-plain colored"></i>
          <p>C/C++</p>
        </div>
        <div className="skill-card">
          <i className="devicon-gimp-plain colored"></i>
          <p>Gimp</p>
        </div>
        <div className="skill-card">
          <i className="devicon-github-plain white"></i>
          <p>Github</p>
        </div>
      </div>

      {/* ----intrests---- */}

      <div className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <p>Got an idea or just want to say hi? 👋</p>

        <form
          action="https://formspree.io/f/your_form_id" // Replace with your Formspree form ID
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default App;
