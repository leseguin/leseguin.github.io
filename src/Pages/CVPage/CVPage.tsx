import CVComponent from './../../Components/CVComponent/CVComponent'

import './CVPage.scss'
//import CV from '../../data/LeaneSData/datas'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faDownload
} from '@fortawesome/free-solid-svg-icons'
import React from 'react';

export default function CVPage() {
    return (
      <div className="cv-page">
        <div className="page-header">
          <div className="download-resume">
              <a href={"/#"}   
                 
                 onClick={(e) => {
                   e.preventDefault();
                   window.print();
                 }}
                 >

                {/*</a><a href={CV}>*/}
                  <FontAwesomeIcon className="icon" icon={faDownload}/>
                  <p>Télécharger au format PDF</p>
              </a>
          </div>
        </div>
       <CVComponent/>
       {/*<MotivComponent/>*/}
      </div>
    );
}