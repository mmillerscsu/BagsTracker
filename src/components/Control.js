import React from 'react'
import './Control.css'

const Control = (props) => {
    return (
        <div className="Control">
            <div className="Label">{props.label}</div>
            <button onClick={props.clicked}>{props.type}</button>
        </div>
    )
}

export default Control
