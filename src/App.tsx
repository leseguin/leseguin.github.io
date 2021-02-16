import React from "react";
import './App.scss';

import {
  Switch,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import CVPage from "./Pages/CVPage/CVPage";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";


function App() {
  return (
    <div className="App">
      <div className="app-router">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
    </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
