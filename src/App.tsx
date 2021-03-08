import React from "react";
import './App.scss';

import {
  Switch,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';
import CVPage from "./Pages/CVPage/CVPage";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Wave from "./Components/Wave/Wave";


function App() {
  return (
    <div className="App">
      <div className="app-router">
      {/* basename="/" */}
      <HashRouter>
      <div className="app-router--div" >
        <nav className="app-router--nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">CV</Link>
            </li>
            <li>
              <Link to="/projects">Projets</Link>
            </li>
          </ul>
          <div className="made-with">
            <p>Designed with React and Sass</p>
          </div>
        </nav>
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#104f55" fill-opacity="1" d="M0,0L1440,32L1440,0L0,0Z"></path>
          </svg>
        </div>
        
        <Switch>
          <Route path="/resume">
            <CVPage />
          </Route>
          <Route path= "/projects">
            <Projects/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </HashRouter>

      </div>
    </div>
  );
}

export default App;
