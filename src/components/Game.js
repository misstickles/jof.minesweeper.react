'use strict';

import React from 'react';
import initialState from '../constants/initialState';
import Timer from './Timer';
import Difficulty from './Difficulty';
import Board from './Board';

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.stopStartTimer = this.stopStartTimer.bind(this);
        this.state = initialState;
    }

    stopStartTimer() {
        this.setState({
            timer: {
                isRunning: !this.state.timer.isRunning
            }
        });
    }

    render() {
        return (
            <div>
                <Board />
                <h1 className="btn btn-info" onClick={this.stopStartTimer}>{this.state.timer.isRunning ? 'Stop' : 'Start'}</h1>
                <Timer className="timer" timerRunning={this.state.timer.isRunning} />
                <div><Difficulty /></div>
                <div>{this.state.difficulty.level.label}</div>
            </div>
        );
    }
}

export default Game;