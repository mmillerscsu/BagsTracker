import React from 'react'
import './Control.css';

const SubmitControl = (props) => {
    return (
        <div className="Control">
            <button className="Board" onClick={props.clicked}>{props.label}</button>
        </div>
    )
}


export default SubmitControl