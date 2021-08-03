import HomePage from './components/Pages/HomePage';
import './App.css';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Projects from './components/Pages/Projects';
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

      <Route path="/projects">
        <Projects />
      </Route>

    </div>
  );
}

export default App;
