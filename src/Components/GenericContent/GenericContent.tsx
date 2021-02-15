import {IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {FunctionComponent} from 'react'

type genericDate = {
    from : string,
    to : string
}

type genericDescription = {
    title? : string,
    by? : string,
    description? : Array<string>
}

type genericContent =  {
    title?: string,
    date? : genericDate, 
    description : Array<genericDescription>;
}

type genericPart = {
    contentPartTitle : string, 
    contents : Array<genericContent>;
}

export type genericPartProps = {
    partData : genericPart, 
    partClass? : string, 
    partIcon? : IconProp
}

const dateDisplayer = (date? : genericDate) => {
    if(date) {
        const displayDate = date.from !== "" 
        ? <span className="date">{date.from} – {date.to} :</span> 
        : <span className="date">{date.to} :</span>
    return(displayDate)
    } else return ""
    
}

const arrayStringDisplayer = (sentences : Array<string>) => {
    return(
        <p>
            {
            sentences.map((sentence : string, y) => {
                return(sentence = y !== 0 ? " - " + sentence: sentence )
            } 
            )}
        </p>
        
    )
}

const singleContentDisplayer = (content : genericContent) => {

    return (
        <div className="contents--content--desc">
            {
                content.description && content.description.map((desc : genericDescription, y) => {
                    const titleDisplay = desc.title 
                        ? <span className="desc--title"><strong>{desc.title}</strong></span> : ""
                    const byDisplay = desc.by ? <span className="desc--by">{desc.by}</span> : ""
                    const childDescripDisplay = desc.description 
                        ? <div className="desc--description">{arrayStringDisplayer(desc.description)}</div> : ""
                    
                    var descrip; 
                    if (desc.title || desc.by || desc.description) {
                        descrip = <div className="desc" key={y}>
                            <p>{titleDisplay} {byDisplay}</p>
                            {childDescripDisplay}
                        </div> 
                    } else descrip = ""
                    return (descrip)
                })
            }
        </div>
    )
}

const contentsDisplayer = (contents : Array<genericContent>) => {    
    return (
    <div className="generic-part--contents">
         {contents.map && contents.map((content : genericContent, y) =>
            <div key={y}className="contents--content">
                <div className="contents--content--header">
                    <div className="contents--content--date">{dateDisplayer(content.date)}</div>
                    <div className="contents--content--title"><strong>{content.title}</strong></div>
                </div>
                {singleContentDisplayer(content)}
            </div>
        )} 
    </div>
    )
}

export const GenericContent : FunctionComponent<genericPartProps> = (props) => {
    const icon = props.partIcon ? <FontAwesomeIcon className="icon" icon={props.partIcon}/> : ""
    return(
        <div className={`generic-part ${props.partClass}`} >
        <div className="generic-part--title"><h3>{icon}{props.partData.contentPartTitle}</h3></div>
        {contentsDisplayer(props.partData.contents)}
    </div>
    )
}