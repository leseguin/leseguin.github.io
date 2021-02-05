import React, {FunctionComponent} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLandmark,
    faDumbbell
} from '@fortawesome/free-solid-svg-icons'

import './Divers.scss'

type DiversProps = {

}

const Divers : FunctionComponent<DiversProps> = () => <div className="divers-components">
    {/* <h2>Divers</h2> */}
    <div className="divers-content">
        <div className="divers-engagement">
            <h3><FontAwesomeIcon className="icon" icon={faLandmark}/> Engagements</h3>
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
        <div className="divers-loisirs">
            <h3><FontAwesomeIcon className="icon" icon={faDumbbell}/> Loisirs</h3>
            <p>Crossfit – Histoire – Voyage – Dessin <br/> Rock (Janis Joplin, Simon and Garfunkel, Naïve New Beaters …)</p>
        </div>
    </div>
    
</div>

export default Divers;