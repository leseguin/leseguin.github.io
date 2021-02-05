import React, { FunctionComponent } from 'react'; // we need this to make JSX compile

import { Container} from 'react-bootstrap';

import './CVComponent.scss'
import Wave from './../Wave/Wave'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPhoneAlt,
    faEnvelope,
    faBirthdayCake
} from '@fortawesome/free-solid-svg-icons'


import Divers from '../divers/Divers';
import Experience from '../experiences/Experience';
import Formation from '../formations/Formation';
import Realisation from '../realisations/Realisation';
import Skills from './../skills/Skills'

type CVProps = {
}
const mainColor = "#105a63";

const CVComponent : FunctionComponent<CVProps> = () => <Container className="cv-component"> 
    <header>
        <div className="header-me">
            <h1>Léane Seguin</h1>
        </div>
        <div className="header-contact">
            <p><FontAwesomeIcon className="icon" icon={faPhoneAlt}/> 07.77.76.53.52<br/>
            <FontAwesomeIcon  className="icon" icon={faEnvelope}/> leane.seguincomptes@gmail.com<br/>
            <FontAwesomeIcon className="icon" icon={faBirthdayCake}/> 21 ans<br/>
            </p>
        </div>
        
    </header>
    
    <div className="content">
        <div className="wave">
            <Wave type="top" color={mainColor}/>
        </div>

        <div className="column">
            <div className="content-col-skills part">
                <Skills/>  
            </div>
            <div className="realisations part">
                <Realisation/>
            </div> 
        </div>
        
        <div className="content-col-main">
            <div className="formations-certifications part">
                <Formation/>
            </div>

            <div className="experiences part">
                <Experience/>
            </div>

        <div className="divers part">
            <Divers/>
        </div>
    </div>
    
    </div>
    
    <div className="footer">
        <div className="wave">
            <Wave type="bottom" color={mainColor}/>
        </div>
        <div className="with-love">
            <p>Designed with React & Sass</p>
        </div>
    </div>
    
</Container>

export default CVComponent