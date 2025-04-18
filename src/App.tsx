import "./App.css";
import blue_robo from "./assets/blue_robo.jpg";
import my_photo from "./assets/vj_photo.jpg";
import "devicon/devicon.min.css";
import { FaGithub, FaLinkedin, FaReddit, FaEnvelope } from "react-icons/fa";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import {Routes, Route, Link } from "react-router-dom";


import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation(); // Get the current route
  const isHome = location.pathname === "/" || location.pathname === "*"; // Check if the current route is home

  return (
    <div>
      <nav className="nav-bar">
        <p>V J 😎</p>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<div> {/* Home content */}</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {isHome && (
        <center>
          {/* Home content */}
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
          </div>
          <p className="intro-to-site">
            Welcome to my space on the web! I’m Vanaraj P, a tech enthusiast
            with a creative heart, exploring the world of code, AI, and
            everything in between.
          </p>
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
            
          <img className="visitors" src="https://api.visitorbadge.io/api/visitors?path=vjcodes.netlify.app&labelColor=%4e4d4d&countColor=%23d9e3f0&style=flat" />
        </center>
      )}
    </div>
  );
};

export default App;
