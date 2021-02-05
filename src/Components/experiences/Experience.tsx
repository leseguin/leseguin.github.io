import React, {FunctionComponent} from 'react'

import './Experience.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFlask
} from '@fortawesome/free-solid-svg-icons'

type ExperienceProps = {

}

const Experience : FunctionComponent<ExperienceProps> = () => <div className="experience-component">
    <h3><FontAwesomeIcon className="icon" icon={faFlask}/> Expériences</h3>
        <div className="experience-row">
            <p><span className="date">Septembre 2020 - Février 2021 :</span> Année de <strong>Découvertes</strong> et <strong>Formations</strong></p>
            <p><i>Chemin de Saint Jacques de Compostelle</i></p>
            <p><i>Formations en ligne Coursera & OpenClassRoom</i></p>
        </div>
        <div className="experience-row">
            <p><span className="date">Septembre 2019 - Aout 2020 :</span> <strong>Alternance</strong> – CIO Systèmes Embarqués – Saint-Etienne</p>
            <p><i>Technicienne de tests et développement logiciels</i></p>
            <p><i>Rédaction des documents de qualification pour le CNES</i></p>
        </div>
        <div className="experience-row">
            <p><span className="date">Avril-Juin 2019 :</span> <strong>Stage</strong> – Robert Gordon University – Aberdeen – <strong>Ecosse</strong></p>
            <i>Développement d’un ChatBot pour une application mobile (Dialogflow – Firebase – Javascript – Python)</i>
        </div>
        <div className="experience-row">
            <p><span className="date">2017-2018 :</span> Emploi d’été - INNOVEL – Vénissieux</p>
            <i>Fabrication/montage de produits électroniques, gestion des entrées et du stock, conditionnement</i>
        </div>
</div>

export default Experience;