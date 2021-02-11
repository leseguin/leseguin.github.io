import React, {FunctionComponent} from 'react'
import './Formation.scss'

import {FormationData} from './../../data/LeaneSData/FormationsData'
import {FormationType} from './../../Type/Types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faGraduationCap
} from '@fortawesome/free-solid-svg-icons'


type FormationProps = {
}



const formationDisplayer = (formation : FormationType) => {
    const date = formation.date
    var displayedDate = date.from !== "" ? <span className="date">{date.from} – {date.to} :</span> : <span className="date">{date.to} :</span>
    return (
        <div className="formation-row">
            <div className="formation-row--title part-row-title">
                <p>{displayedDate}<strong> {formation.name}</strong></p>
            </div>
            <div className="formation-row--description part-row-description">
            {
                formation.descriptions && formation.descriptions.map((description : any) => {
                    const formation = description.formation !== "" 
                        ? <p><strong>- {description.formation}</strong> - {description.by}</p>
                        : <p>- {description.by}</p>
                    return formation
                })
                    
            }
            </div>
        </div>
    )
}

const Formation : FunctionComponent<FormationProps> = () => <div className="formations-certifications-component">
    <h3> <FontAwesomeIcon className="icon" icon={faGraduationCap}/>{FormationData.title}</h3>
        {
            FormationData.formations && FormationData.formations.map((formation : any) => formationDisplayer(formation) )
        }
</div>

export default Formation;