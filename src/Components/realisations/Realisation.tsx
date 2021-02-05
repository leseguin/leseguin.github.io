import React, {FunctionComponent} from 'react'
import './Realisation.scss'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTasks,
    faGlobe
} from '@fortawesome/free-solid-svg-icons'

type RealisationProps = {

}

const Realisation : FunctionComponent<RealisationProps> = () => <div className="realisations-component">
    {/* <h2>Realisations et Langues</h2> */}
    <h3><FontAwesomeIcon className="icon" icon={faTasks}/> Réalisations</h3>
        <div className="real">
            <p className="date">2020 - 2021</p>
            <ul>
                <li><strong>React Native App :</strong> Stockage de données (Expo – Firebase Auth – Firestore)</li>
                <li><strong>Site Web personnel</strong> (React JS - TypeScript – SASS)</li>
            </ul>
        </div>

        <div className="real">
        <p className="date">2019 - 2020</p>
            <ul>
                <li><strong>Application et logiciel "UFR-Langues" :</strong> effectuer des exercices de latin (Xamarin - C# - XAML)</li>
                <li><strong>Application IOS "TrumpOrWest" :</strong> Jeu - qui a dit la phrase 
                    proposée entre Kanye West et Donald Trump. (Swift – 2 API)</li>
                <li><strong>Application Android "MyRecipeIdea" :</strong> Créer un évènement; idées de recettes; générateur de blagues. (Kotlin - SpoonAcular API)</li>
            </ul>
        </div>
            
        <div className="real">
            <p className="date">2018 - 2019</p>
            <ul>   
                <li><strong>ChatBot "Coach Sportif"</strong> (Javascript – Python - Firabase - Dialogflow)</li>
            </ul>
        </div>
            
    <div className="language">
        <h3><FontAwesomeIcon className="icon" icon={faGlobe}/> Langues</h3>
        <p><strong>Anglais :</strong><br/>TOIEC 905/990 - niveau B2</p>
        <p><strong>Espagnol :</strong><br/>niveau B1</p>
    </div>
</div>

export default Realisation;