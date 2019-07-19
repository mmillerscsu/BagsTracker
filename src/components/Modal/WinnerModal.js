import React from 'react'
import './WinnerModal.css'
import SubmitControl from '../SubmitControl';

const WinnerModal = (props) => {
    return (
        <div className="WinnerModal">
            <div className={props.color} style={{color: "white", fontSize: "50px"}}>Team {props.team} Wins!</div>
            <div style={{paddingTop: "25%", marginLeft: "25px"}}>
                <SubmitControl label={props.label} clicked={props.endgame}></SubmitControl>
            </div>
        </div>
    )
}

export default WinnerModal
