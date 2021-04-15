import React, { FunctionComponent } from 'react'
import BubbleLink from '../../Components/BubbleLink/BubbleLink';

import './Projects.scss'

import {
  faTasks
} from '@fortawesome/free-solid-svg-icons'
import {
  faApple,
  faBootstrap,
  faAndroid
} from '@fortawesome/free-brands-svg-icons'

type projectsProps = {} 

const Projects : FunctionComponent<projectsProps> = () => {
  return (
    <div className="project-page">

      <div className="projects-page--content certifs">
        <h3>Mes certifications</h3>
        <div className="content--part certifs-part left">
            <BubbleLink link="https://www.coursera.org/account/accomplishments/specialization/XWHYQL8H6H2F" bubbleTitle="iOS" bubbleIcon={faApple}/>
            <h4>Swift 5 iOS Application Developer</h4>
            <div className="content--part--desc">
              <ol>
                <li>Introduction to Programming in Swift 5</li>
                <li>Introduction to iOS App Development with Swift 5</li>
                <li>Tables, Data &amp; Networking in iOS</li>
                <li>iOS App Store &amp; In-App Purchases</li>
              </ol>
            </div>
           
        </div>
        <div className="content--part certifs-part right">
            <BubbleLink link="https://coursera.org/share/d24a5ac09b78ae05abe25cdb9d4f7fca" bubbleTitle="Front-end" bubbleIcon={faBootstrap}/>
            <h4>Front-End Web UI Frameworks and Tools: Bootstrap 4</h4>
        </div>
        <div className="content--part certifs-part left">
            <BubbleLink link="https://coursera.org/share/63b0233e1404cb73aa0e37607116c993" bubbleTitle="Kotlin" bubbleIcon={faAndroid}/>
            <h4>Kotlin for Java Developers par JetBrains</h4>
        </div>
        <div className="content--part certifs-part right">
            <BubbleLink link="https://coursera.org/share/5bf3c9dba50cb34bd36476942eb7f110" bubbleTitle="SPM" bubbleIcon={faTasks}/>
            <h4>Introduction to Software Product Management</h4>
        </div>
      </div>
      <div className="projects-page--content project">
        <h3>Mes projets</h3>
        <div className="content--part">
            <p>La section arrive prochainement ...</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;