import React from 'react'
import './Output.css'

const Output = (props) => {
        return (
            <div className="Score">
                <h2>{props.teamName}</h2>
                <h1>
                    {props.score}
                </h1>
            </div>
        )
}

export default Output;
