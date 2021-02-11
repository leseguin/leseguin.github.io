import React, {FunctionComponent} from 'react'

import './Experience.scss'

import {experiencesData} from './../../data/LeaneSData/ExperiencesData'
import {ExperienceType} from './../../Type/Types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFlask
} from '@fortawesome/free-solid-svg-icons'

type ExperienceProps = {

}

const experienceDisplayer = ( experience : ExperienceType) => {

    const date = experience.date
    var displayedDate = date.from !== "" ? <span className="date">{date.from} – {date.to} :</span> : <span className="date">{date.to} :</span>

    return(
        <div className="experience-row">
            <div className="experience-row--title part-row-title">
                <p>{displayedDate}<strong> {experience.name}</strong></p>
            </div>
            <div className="experience-row--description part-row-description">
                {
                experience.descriptions && experience.descriptions.map((description : any) =>
                <p><i>{description}</i></p>
                )}
            </div>
        </div>
    )
    
}

const Experience : FunctionComponent<ExperienceProps> = () => <div className="experience-component">
    <h3><FontAwesomeIcon className="icon" icon={faFlask}/>Expériences</h3>
        {
            experiencesData.experiences && experiencesData.experiences.map((experience: any) => experienceDisplayer(experience) )
        }
</div>

export default Experience;