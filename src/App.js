import HomePage from "./components/Pages/HomePage/HomePage";
import "./App.css";
import About from "./components/Pages/AboutPage/About";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/ContactPage/Contact";
import Projects from "./components/Pages/ProjectPage/Projects";
import Experience from "./components/Pages/Experiences/Experience";
import Education from "./components/Pages/Education/Education";
import Fun from "./components/Pages/Fun/Fun";
import { Route, Switch, Redirect } from "react-router-dom";
import Copyright from "../src/components/Pages/Copyright/Copyright";
import React,{Fragment} from 'react';


function App() {
  return (
    <Fragment> 
    <div className="App">
      <HomePage />
      <Switch > 
        <Route path="home">
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

        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
    <Copyright/>
    </Fragment>
  );
}

export default App;
