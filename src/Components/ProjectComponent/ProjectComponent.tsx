import React, { FunctionComponent } from 'react'
import './ProjectComponent.scss'

import gif from './MyEventApp.gif'

type projectProps = {

}

const ProjectComponent : FunctionComponent<projectProps> = () => {
    return (
        <div className="project">
            <h3>Project title</h3>
            <div className="project-description">
                <p>Description genial du projet</p>
                <img className="gif" src={gif} alt="Logo" />
            </div>
        </div>
    )
}

export default ProjectComponent; 