import React from 'react'
import './Control.css';

const SubmitControl = (props) => {
    return (
        <div className="SubmitControl">
            <button className="Board" onClick={props.clicked}>{props.label}</button>
        </div>
    )
}


export default SubmitControl