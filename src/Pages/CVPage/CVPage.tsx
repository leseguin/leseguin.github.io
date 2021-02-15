import CVComponent from './../../Components/CVComponent/CVComponent'

import './CVPage.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faDownload
} from '@fortawesome/free-solid-svg-icons'

export default function CVPage() {
    return (
      <div className="cv-page">
        <div className="page-header">
          <div className="download-resume">
            <a href={"/#"}    
                onClick={(e) => {
                  e.preventDefault();
                  window.print();
                }}>
                  <FontAwesomeIcon className="icon" icon={faDownload}/>
                  <p>Télécharger au format PDF</p>
              </a>
          </div>
        </div>
       <CVComponent/>
      </div>
    );
}