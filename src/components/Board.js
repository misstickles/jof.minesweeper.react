'use strict';

import React, {PropTypes} from 'react';
import Cell from './Cell';
import options from '../constants/gameOptions';
import {GenerateGridOfSizeXYWithDefault} from '../modules/Grid';

class Board extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            board: this._initialiseBoard(options.board.level)
        };
    }

    // TODO: refactor to avoid new objects
    // TODO: un-piggle passing of too many params
    _initialiseBoard(level) {
        let rows = level.rows, cols = level.cols;
        
        let board = GenerateGridOfSizeXYWithDefault(
            rows, 
            cols, 
            {...options.board.defaultCell});

        let i = 0, x = -1, y = -1;

        while (i < level.mines) {
            x = Math.floor(Math.random() * rows);
            y = Math.floor(Math.random() * cols);

            if (!board[x][y].isMine === true) {
                board[x][y] = {...board[x][y], isMine: true};
                board = this._incrementSurroundingCells(x, y, rows, cols, board);
                i++;
            }
        }

        return board;
    }

    _incrementSurroundingCells(x, y, r, c, board) {
        // not using map / forEach as need to break if out of bounds
        for(let lr of [x-1, x, x+1]) {
            for (let ud of [y-1, y, y+1]) {
                if (lr < 0 || ud < 0 || lr >= c || ud >= r) break;
                board[lr][ud] = {...board[lr][ud], value: board[lr][ud].value + 1};
            }
        }

        return board;
    }

    render() {
        const board = this.state.board.map((row, r) => {
            let cells = row.map((cell, c) => {
                return <Cell key={`c${c}:${r}`} data={cell} />;
            });

            return <div key={r}>{cells}</div>;
        });

        return <div className="grid">{board}</div>;
    }
}

export default Board;