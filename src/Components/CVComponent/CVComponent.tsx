import React, { FunctionComponent } from 'react'; // we need this to make JSX compile

import './CVComponent.scss'
import Wave from './../Wave/Wave'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPhoneAlt,
    faEnvelope,
    faBirthdayCake,
    faDumbbell,
    faLandmark,
    faTasks,
    faGlobe,
    faCode, 
    faTools,
    faGraduationCap,
    faFlask
} from '@fortawesome/free-solid-svg-icons'


import {GenericContent} from '../GenericContent/GenericContent';

import {
    hobbiesData, formationsData, experiencesData, 
    engagementData, skillsData, toolsData,
    realisationsData, languagesData
    } from './../../data/LeaneSData/datas'

type CVProps = {
}
const mainColor = "#105a63";

const CVComponent : FunctionComponent<CVProps> = () => <div className="cv-component"> 
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
        <Wave place="top" color={mainColor}/>

        <div className="column">
            <GenericContent partClass="skills" partIcon={faCode} partData={skillsData.partData}/>
            <GenericContent partClass="tools" partIcon={faTools} partData={toolsData.partData}/>
            <GenericContent partClass="realisations" partIcon={faTasks} partData={realisationsData.partData}/>
            <GenericContent partClass="languages" partIcon={faGlobe} partData={languagesData.partData}/>


            
        </div>
        
        <div className="content-col-main">
            <GenericContent partClass="formations" partIcon={faGraduationCap} partData={formationsData.partData}/>
            <GenericContent partClass="experiences" partIcon={faFlask} partData={experiencesData.partData}/>
            <GenericContent partClass="engagements" partIcon={faLandmark} partData={engagementData.partData}/>
            <GenericContent partClass="hobbies" partIcon={faDumbbell} partData={hobbiesData.partData}/>
        </div>
    
    </div>
    
    <div className="footer">
        <Wave place="bottom" color={mainColor}/>
        <div className="with-love">
            <p>Designed with React & Sass</p>
        </div>
    </div>
    
</div>

export default CVComponent