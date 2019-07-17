import React, { Component } from 'react';
//import Controls from '../components/Controls';
import Output from '../components/Output';
import Control from '../components/Control';
import SubmitControl from '../components/SubmitControl';
import './Counter.css';

const BOARD1 = "BOARD1";
const HOLE1 = "HOLE1";
const BOARD2 = "BOARD2";
const HOLE2 = "HOLE2";
const RESET = "RESET";
const ENDGAME = "ENDGAME";
const SUBMIT = "SUBMIT";

export default class Counter extends Component {
    
    state = {
        team1: {
            counter: 0,
            totalScore: 0,
            hole: 0,
            board: 0,
            teamName: "TEAM 1"
        },
        team2: {
            counter: 0,
            totalScore: 0,
            hole: 0,
            board: 0,
            teamName: "TEAM 2"
        },
        reset: false
    }

    resetHandler = () => {
        this.setState(prevState => ({ 

            team1: { ...prevState.team1, board: prevState.team1.board = 0,
            hole: prevState.team1.hole = 0,
            counter: prevState.team1.counter = 0},

            team2: { ...prevState.team2, board: prevState.team2.board = 0,
                hole: prevState.team2.hole = 0,
            counter: prevState.team2.counter = 0},
            
            }))
    }

    submitHandler = () => {

        if(this.state.team1.counter < 0){
            this.setState(prevState => ({ team1: { ...prevState.team1, totalScore: prevState.team1.totalScore += 0}}))
        }else {
            this.setState(prevState => ({ team1: { ...prevState.team1, totalScore: prevState.team1.totalScore += prevState.team1.counter}})) 
        }
        if(this.state.team2.counter < 0){
            this.setState(prevState => ({ team2: { ...prevState.team2, totalScore: prevState.team2.totalScore += 0}}))
        }else {
            this.setState(prevState => ({ team2: { ...prevState.team2, totalScore: prevState.team2.totalScore += prevState.team2.counter}})) 
        }

        this.resetHandler();
                
    }

    endgameHandler = () => {
        this.resetHandler();

        this.setState(prevState => ({ team1: { ...prevState.team1, totalScore: prevState.team1.totalScore = 0}}))
        this.setState(prevState => ({ team2: { ...prevState.team2, totalScore: prevState.team2.totalScore = 0}}))
    }

    team1BoardHandler = () => {
    
        this.setState(prevState => 
            ({ team1: { ...prevState.team1, board: prevState.team1.board + 1, counter: prevState.team1.counter + 1},
                team2: { ...prevState.team2, counter: prevState.team2.counter -1}}));
    }

    team2BoardHandler = () => {
       
        this.setState(prevState => 
            ({ team2: { ...prevState.team2, board: prevState.team2.board + 1, counter: prevState.team2.counter + 1},
                team1: { ...prevState.team1, counter: prevState.team1.counter -1}}));
        
    }

    team1HoleHandler = () => {
        this.setState(prevState => 
            ({ team1: { ...prevState.team1, hole: prevState.team1.hole + 1, counter: prevState.team1.counter + 3},
                team2: { ...prevState.team2, counter: prevState.team2.counter - 3}}));
    }

    team2HoleHandler = () => {
        this.setState(prevState => 
            ({ team2: { ...prevState.team2, hole: prevState.team2.hole + 1, counter: prevState.team2.counter + 3},
                team1: {...prevState.team1, counter: prevState.team1.counter - 3}}));
    }

    counterHandler = (action) => {
        switch(action){
            case BOARD1 : return this.team1BoardHandler();
            case BOARD2 : return this.team2BoardHandler();
            case HOLE1 : return this.team1HoleHandler();
            case HOLE2 : return this.team2HoleHandler();
            case RESET : return this.resetHandler();
            case ENDGAME : return this.endgameHandler();
            case SUBMIT : return this.submitHandler();
            default:
                return;
        }
    }

    render() {  

         let winner = (
            <div>
             <div className="Team1Wrapper">
                    <Output score={this.state.team1.totalScore} counter={this.state.team1.counter} teamName={this.state.team1.teamName}></Output>
                    <div className="Controls">
                        <Control label="BOARD" clicked={() => this.counterHandler(BOARD1)} type={this.state.team1.board}></Control>
                        <Control label="HOLE" clicked={() => this.counterHandler(HOLE1)} type={this.state.team1.hole}></Control> 
                    </div>
            </div>
            <div className="Team2Wrapper">
                    <Output score={this.state.team2.totalScore} counter={this.state.team2.counter} teamName={this.state.team2.teamName}></Output>
                    <div className="Controls">
                        <Control label="BOARD" clicked={() => this.counterHandler(BOARD2)} type={this.state.team2.board}></Control>
                        
                        <Control label="HOLE" clicked={() => this.counterHandler(HOLE2)} type={this.state.team2.hole}></Control> 
                    </div>
            </div>
            </div>
         )

         if(this.state.team1.totalScore >= 21){
            winner = (
                <div>
                    <div>Team 1 Wins!</div>
                    <Control label={ENDGAME} clicked={() => this.counterHandler(ENDGAME)}></Control>
                </div>
            )
         }else if(this.state.team2.totalScore >= 21){
            winner = (
                <div>
                    <div>Team 2 Wins!</div>
                    <Control label={ENDGAME} clicked={() => this.counterHandler(ENDGAME)}></Control>
                </div>
            )   
         }
        
        return (
            <div>
                {winner}
                <div className="SubControls">
                    <SubmitControl label={RESET} clicked={() => this.counterHandler(RESET)}></SubmitControl>
                    <SubmitControl label={SUBMIT} clicked={() => this.counterHandler(SUBMIT)}></SubmitControl>
                </div>
            </div>
            
        )
        
    }
}
