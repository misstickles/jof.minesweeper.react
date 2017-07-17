import React, {Component} from 'react';
import Board from './Board';

class Game extends Component {
    static defaultProps = {
        grid: {
            rows: 10,
            columns: 10,
            mines: 20
        }
    };

    componentDidMount() {
        // setTimeout(() => {

        // });
    }

    render() {
        return(
            <div className="container">
                <div>
                    <span id="minesRemaining">10</span>
                    <span id="reset">:o)</span>
                    <span id="timer">23</span>
                </div>
                <Board
                    grid = {this.props.grid} />
            </div>
        );
    }
}

export default Game;