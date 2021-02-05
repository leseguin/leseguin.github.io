import React, {FunctionComponent} from 'react'
import './Formation.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons'


type FormationProps = {
}

const Formation : FunctionComponent<FormationProps> = () => <div className="formations-certifications-component">
    <h3> <FontAwesomeIcon className="icon" icon={faGraduationCap}/> Formations et Certifications</h3>
        <div className="formation-row">
            <p><span className="date">2020 – 2021 :</span> <strong>Coursera - Université en ligne</strong></p>
            <ul>
                <li>
                <strong>Full-Stack Web Development with React Spécialisation</strong> - The Hong Kong University of Science and Technology
                </li>
                <li>
                <strong>Software Product Management</strong> - University of Alberta - Canada
                </li>
                <li>
                <strong>Swift 5 iOS Application Developer</strong> - LearnQuest
                </li>
            </ul>
        </div>
        <div className="formation-row">
            <p>
            <span className="date">2019 – 2020 :</span> <strong>Licence Professionnelle Métiers de l’Informatique</strong> – 
                IUT de Clermont-Ferrand <br/> Développement d'applications pour plateformes mobiles 
            </p>
        </div>
        <div className="formation-row">
            <p>
            <span className="date">2017 – 2019 :</span> <strong>DUT informatique</strong> – IUT de Clermont-Ferrand
            </p>
        </div>
        <div className="formation-row">
            <p>
            <span className="date">2017 :</span> Baccalauréat Scientifique – <strong>spécialité informatique (ISN)</strong> - Mention AB – Lycée Marcel Sembat - Vénissieux
            </p>
        </div>
</div>

export default Formation;