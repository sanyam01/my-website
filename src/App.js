import HomePage from './components/Pages/HomePage/HomePage';
import './App.css';
import About from './components/Pages/AboutPage/About';
import Home from './components/Pages/Home/Home';
import Contact from './components/Pages/ContactPage/Contact';
import Projects from './components/Pages/ProjectPage/Projects';
import Experience from './components/Pages/Experiences/Experience';
import Education from './components/Pages/Education/Education';
import Fun from './components/Pages/Fun/Fun';
import { Route } from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
      <HomePage/>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/experience">
        <Experience />
      </Route>

      <Route path="/funFacts">
        <Fun />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/education">
        <Education />
      </Route>









    </div>
  );
}

export default App;
