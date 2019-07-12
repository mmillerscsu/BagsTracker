import React from 'react'
import './Control.css'

const Control = (props) => {
    return (
        <div className="Control">
            <button className="Board" onClick={props.clicked}>{props.label}</button>
            <div> : {props.type}</div>
        </div>
    )
}

export default Control
