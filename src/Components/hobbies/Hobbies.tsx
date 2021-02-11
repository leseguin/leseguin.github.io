import React, {FunctionComponent} from 'react';

import './Hobbies.scss'

import {hobbiesData} from './../../data/LeaneSData/HobbiesData'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faDumbbell
} from '@fortawesome/free-solid-svg-icons'

type HobbiesProps = {

}

const hobbyDisplayer = (name : String, description: String) => {
    var hobbyName = <p className="hobby--name part-row-title">{name}</p> 
    var hobbyDescription = description !== "" ? <p className="hobby--desc part-row-description">-- {description}<br/></p> : ""
    return(
        <div className="hobby">
               {hobbyName} 
               {hobbyDescription}
        </div>
    )
}

const Hobbies : FunctionComponent<HobbiesProps> = () => 
    <div className="hobbies-component">
        <h3><FontAwesomeIcon className="icon" icon={faDumbbell}/> {hobbiesData.title}</h3>
        <div className="hobbies"> 
        {
           hobbiesData.hobbies && hobbiesData.hobbies.map((hobby: { name: String, description : String }) => 
                hobbyDisplayer(hobby.name, hobby.description))
        }
        </div>
    </div>


export default Hobbies;