import React from 'react'
import Button from './Button';

const Controls = (props) => {
        return (
            <div>
                <Button label={props.label} clicked={props.clicked}></Button>
                <Button label={props.label} clicked={props.clicked}></Button> 
                <Button label={props.label} clicked={props.clicked}></Button>
            </div>
        )
}

export default Controls
