import React, {FunctionComponent} from 'react'

import {DiversType} from './../../Type/Types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLandmark
} from '@fortawesome/free-solid-svg-icons'

import './Divers.scss'


type diversProps ={

} 

const Divers : FunctionComponent<diversProps> = () => <div className="divers-components">
    <div className="divers-content">
        <div className="divers-engagement">
            <h3><FontAwesomeIcon className="icon" icon={faLandmark}/>Engagements</h3>
            <div className="divers-engagement--content">
            <p className="date rotate-date">2017</p>
            <p className="political">
                Étudiante titulaire au conseil de gestion de l’IUT <i>(mandat de 2 ans)</i><br/>
                Membre de la Commission de la Vie Etudiante de l’IUT <i>(mandat de 2 ans)</i><br/>
                Responsable Communication au Bureau Des Etudiants <i>(mandat de 1 an)</i><br/>
                Membre du Conseil de Département du DUT informatique <i>(mandat de 1 an)</i><br/> 
            </p>
            </div>
            
        </div>
    </div>
    
</div>





export default Divers;