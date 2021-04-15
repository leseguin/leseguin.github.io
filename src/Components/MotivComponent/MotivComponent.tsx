import React, { FunctionComponent } from 'react'; // we need this to make JSX compile

import './MotivComponent.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPhoneAlt,
    faEnvelope,
    faBirthdayCake,
    faGlobe
} from '@fortawesome/free-solid-svg-icons'
import Wave from '../Wave/Wave';

const mainColor = "#105a63";

type props = {}

const MotivComponent : FunctionComponent<props> = () => <div className="motiv-component"> 
    <header>
        <div className="header-me">
            <h1>Léane Seguin</h1>
        </div>
        <div className="header-contact">
            <p><FontAwesomeIcon className="icon" icon={faPhoneAlt}/> 07.77.76.53.52<br/>
            <FontAwesomeIcon  className="icon" icon={faEnvelope}/> leane.seguincomptes@gmail.com<br/>
            <FontAwesomeIcon className="icon" icon={faBirthdayCake}/> 22 ans<br/>
            <FontAwesomeIcon className="icon" icon={faGlobe}/> http://leseguin.github.io<br/>
            </p>
        </div>
    </header>

    <div className="content">
        <Wave place="top" color={mainColor}/>

        <div className="content--part">
            <p className="MrsAndM"> 
                Madame, Monsieur,
            </p>
            <p>
            Ayant fini mes études d’informatique en septembre 2020 et après une année sabbatique, je souhaite maintenant reprendre mes études d’informatique. Je suis aujourd’hui à la recherche d’une formation me permettant de continuer à m’améliorer et à apprendre dans ce domaine. Votre formation me semble être l’idéal pour cela.
            </p>
            <p>
            J’ai eu l’opportunité de réaliser pendant 3 ans des études à l’IUT informatique de Clermont-Ferrand, où j’ai obtenu en 2019 mon DUT informatique, puis en 2020 ma Licence Professionnelle Métiers de l’Informatique spécialisée en développement d'applications pour plateformes mobiles, effectuée en alternance.
            </p>

            <p>
            Au cours de ces années, j’ai pu prendre part à différents projets. Je suis notamment partie en Ecosse pour effectuer un stage au sein de la Robert Gordon University. J’ai travaillé avec des chercheurs en informatique au développement d’une application mobile liée à la santé. Ce stage m’a permis de développer de nouvelles compétences, j’ai en effet réalisé un agent conversationnel permettant aux utilisateurs d’effectuer des exercices sportifs. En plus de me permettre de découvrir le milieu professionnel, ce stage fut pour moi l’occasion de sortir de ma zone de confort en travaillant pour la première fois après mon DUT sur un projet réel. 
            </p>

            <p>
            J’ai choisi ensuite la voie de l’alternance pour me spécialiser dans le développement d’application mobile. Cette expérience a été un vrai apprentissage pour moi. J’ai découvert un univers tout à fait nouveau dans lequel j’ai su m’adapter : l’électronique embarqué. De par mon rôle dans l’entreprise, « Technicienne de tests et développement logiciels », j’ai compris l’importance de contrôler, tester, vérifier et de s’assurer de sa qualité du produit tout au long de son développement. 
            </p>

            <p>
            A la suite de ces études supérieures, j’ai pris la décision de prendre une année sabbatique, afin de prendre le temps de réfléchir et de construire mon projet d’avenir avant de commencer mon aventure dans le milieu professionnel. Je suis partie sur le Chemin de Saint-Jacques de Compostelle. J’ai pu faire de nombreuses rencontres sur ce chemin et réfléchir à mes objectifs et attentes aussi bien sur le plan personnel que professionnel.
            </p>

            <p>
            Cette période m’a également permis de me former sur différents sujets, soit pour conforter mes acquis, soit pour découvrir de nouveaux langages et concepts ; notamment via des Certifications en ligne données par des universités du monde entier. Travailler seule en découvrant de nouveaux concepts plus concrets que ceux du monde académique, m’ont permis de d’acquérir encore plus de rigueur et de maturité.
            </p>

            <p>
            Ces formations ont confirmé mon attrait pour le développement mobile natif, IOS ou Android. J’ai donc choisi de passer des certifications allant dans ce sens ; Kotlin for Java Developers par JetBrains ainsi que Swift 5 iOS Application Developer. C’est dans cette voie que j’aimerais continué profesionnellement.
            </p>

            <p>
            Aujourd’hui, je veux retourner dans un cursus dit classique, forte de mon année d’expérience, je souhaite solidifier mes acquis et développer de nouvelles compétences au sein de votre université. 
            </p>

            <p>
            Le liens suivant https://leseguin.github.io vous permettra d’accéder à mon CV et mon site Web personnel. Un lien vous orientera aussi sur mon profil Linkedin, mon profil GitHub ainsi que le détail des différentes certifications que j’ai pu faire.
            </p>

            <p>
            Je me tiens à votre disposition pour vous rencontrer ou échanger plus profondément sur mes motivations.
            </p>

            <p>
            Je vous prie de bien vouloir agréer, Madame, Monsieur l’expression de mes salutations distinguées.
            </p>


            <p className="content--signature">
                Léane Seguin
            </p>
        </div>

        
    </div>

    <div className="footer">
        <Wave place="bottom" color={mainColor}/>
        <div className="with-love">
            <p>Designed with React &amp; Sass</p>
        </div>
    </div>
</div>

export default MotivComponent