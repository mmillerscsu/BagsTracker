import React from 'react'
import './Output.css'

const Output = (props) => {
        return (
            <div>
                <h2>{props.teamName}</h2>
                <h1 className="Score">
                    {props.score}
                </h1>
            </div>
        )
}

export default Output;
