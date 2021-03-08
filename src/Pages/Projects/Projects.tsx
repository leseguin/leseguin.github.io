import React, { FunctionComponent } from 'react'
import ProjectComponent from '../../Components/ProjectComponent/ProjectComponent'

import './Projects.scss'

type projectsProps = {} 

const Projects : FunctionComponent<projectsProps> = () => {
  return (
    <div className="project-page">
          <h3>Léane Seguin</h3>
          <div className="projects-page--content">
              <p>La page arrive prochainement ...</p>
          </div>
    </div>
  );
}

export default Projects;