import React, { FunctionComponent } from 'react'
import ProjectComponent from '../../Components/ProjectComponent/ProjectComponent'

import './Projects.scss'

type projectsProps = {} 

const Projects : FunctionComponent<projectsProps> = () => {
  return (
    <div className="project-page">
          <h3>Mes projets</h3>
          <div className="projects-page--content">
              <p>Coming soon... </p>
          </div>
    </div>
  );
}

export default Projects;