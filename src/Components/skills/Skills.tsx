import React, { FunctionComponent } from 'react'; // we need this to make JSX compile
import './Skills.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCode, 
    faTools
} from '@fortawesome/free-solid-svg-icons'

type skillsProps = {
}

const Skills : FunctionComponent<skillsProps> = () => <div className="skills-component"> 
    {/* <h2>Compétences informatique</h2> */}
    <div className="skills-languages">
        <h3><FontAwesomeIcon className="icon" icon={faCode}/> Compétences</h3>
        <p>Swift – Kotlin – Java – JavaScript - TypeScript – HTML – CSS – 
            SASS – React – React Native – Ionic - SQL – C - Python – Angular</p>
    </div>
    <div className="skills-tools">
        <h3><FontAwesomeIcon className="icon" icon={faTools}/> Outils et logiciels</h3>
        <p>Visual Studio – Android Studio - XCode  – Bootstrap – Dialogflow – AWS – Firebase</p>
    </div>
</div>

export default Skills;