import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";

import './BubbleLink.scss'

type BubbleProps = {
    bubbleIcon : IconProp
    link : string
    bubbleTitle : string
}

const BubbleLink : FunctionComponent<BubbleProps> = (props) => <div className="bubble-link">
    <a href={props.link}>
    <FontAwesomeIcon className="icon" icon={props.bubbleIcon}/>
    <p>{props.bubbleTitle}</p>
    </a>
</div>

export default BubbleLink;