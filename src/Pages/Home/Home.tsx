import BubbleLink from '../../Components/BubbleLink/BubbleLink'
import './Home.scss'

import {
  faLinkedin,
  faGithub
  
} from '@fortawesome/free-brands-svg-icons'

import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
      <div className="home-page">
            <h3>Léane SEGUIN</h3>
            <p className="home-page--purpose">En recherche d'un premier emploi dans le développement informatique dans la région clermontoise.</p>
            <div className="home-page--description">
                <h4>Une petite description</h4>
                <p>Après 3 années à l'IUT informatique de Clermont-Ferrand, j'ai obtenu mon <strong>DUT Informatique (2019) </strong>
                   ainsi que ma <strong>Licence Professionnelle Métiers de l’Informatique </strong>spécialisée dans le développement d'applications pour plateformes mobiles (2020).</p>
                <p>A la suite de ces études supérieures, j'ai décidé de faire une année de césure. J'ai marché sur le <strong>Chemin de Saint-Jacques de Compostelle</strong>. 
                  J'ai entrepris aussi de me former sur differents sujets, soit pour conforter mes acquis, soit pour <strong>decouvrir de nouveaux langages et concepts</strong>; 
                  Notamment via des <strong>Certifications</strong> en ligne données par des <strong>universités du monde entier</strong>. 
                </p>
                <p>Après cette année de réflexion, je suis à la <strong>recherche d'un premier emploi dans le développement informatique</strong>, 
                  de préference dans le <strong>développement mobile ou web</strong>, 
                    avec tout de même un attrait particulier pour le développement d'applications mobiles (IOS ou Android).
                </p>
            </div>
            <div className="home-page--findme"> 
                <h4>Où me retrouver ?</h4>
                <div className="findme--bubbles" >
                  <BubbleLink  bubbleTitle="Linkedin" link="https://www.linkedin.com/in/l%C3%A9ane-seguin-a4a71718b/" bubbleIcon={faLinkedin}/>
                  <BubbleLink  bubbleTitle="GitHub" link="https://github.com/leseguin?tab=repositories" bubbleIcon={faGithub}/>
                  <BubbleLink  bubbleTitle="E-mail" link="mailto:leane.seguincomptes@gmail.com" bubbleIcon={faEnvelope}/>
                </div>
            </div>
      </div>
    );
}