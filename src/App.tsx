import React from "react";
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CVPage from "./Pages/CVPage/CVPage";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";


function App() {
  return (
    <div className="App">
      <div className="app-router">
      <Router>
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
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/resume">
            <CVPage />
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    </div>
  );
}

export default App;
