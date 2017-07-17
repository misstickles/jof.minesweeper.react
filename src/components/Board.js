import React from 'react';
import Cell from './Cell';
import PropTypes from 'prop-types';

class Board extends React.Component { //} = (props) => {
    constructor(props) {
        super(props);
        this.state = {
            hiddenBoard: this._setBoard()
        }
    }

    static propTypes = {
        grid: PropTypes.object.isRequired,
        styles: PropTypes.object.isRequired
    };

    _setBoard = () => {
        let noRows = this.props.grid.rows;
        let noCols = this.props.grid.columns;
        let noMines = this.props.grid.mines;

        let placedMines = this._placeMines(noRows, noCols, noMines);
        let grid = [];
        let id = "", isMine = false;

        for (var r = 0; r < noRows; r++) {
            let rows = [];
            for (var c = 0; c < noCols; c++) {
                id = `c${r}:${c}`;
                if (placedMines.includes(id)) {
                    isMine = true;
                } else {
                    isMine = false;
                }

                rows.push({
                    ref: id,
                    id: id,
                    isMine: isMine,
                    status: 'new',
                    value: 0
                });
            }

            grid.push(rows);
        }

        grid = this._updateSurroundingMines(grid, noRows, noCols);

        return grid;
    }

    _placeMines = (rows, cols, number) => {
        let i = 0;
        let placedMines = [];
        let x = 0, y = 0, position = "";

        while (i < number) {
            x = Math.floor(Math.random() * rows);
            y = Math.floor(Math.random() * cols);
            position = `c${x}:${y}`;

            if (!placedMines.includes(position)) {
                placedMines.push(position);
                i++;
            }
        }

        return placedMines;
    }

    _updateSurroundingMines = (grid, rows, cols) => {
        // TODO: refactor!!
        grid.forEach(function(element, idxX) {
            element.forEach(function(el, idxY) {
                if (el.isMine) {
                    el.status = 'mine';

                    if (idxX < rows - 1) {
                        if (idxY < rows - 1) {
                            grid[idxX + 1][idxY + 1].value++;
                        }

                        grid[idxX + 1][idxY + 0].value++;
                        
                        if (idxY > 0) {
                            grid[idxX + 1][idxY - 1].value++;
                        }
                    }

                    if (idxY > 0) {
                        grid[idxX + 0][idxY - 1].value++;
                    }

                    if (idxY < rows - 1) {
                        grid[idxX + 0][idxY + 1].value++;
                    }
                    
                    if (idxX > 0) {
                        if (idxY < rows - 1) {
                            grid[idxX - 1][idxY + 1].value++;
                        }
                        grid[idxX - 1][idxY + 0].value++;
                        if (idxY > 0) {
                            grid[idxX - 1][idxY - 1].value++;
                        }
                    }
                }
            });
        });
        return grid;
    }

    render() {
        let board = this.state.hiddenBoard;
        let grid = [];

        board.forEach(function(element, idx) {
            let rows = [];
            element.forEach(function(el) {
                rows.push(
                    <Cell
                        key={el.id}
                        ref={el.ref}
                        status={el.status}
                        value={el.value}
                        isMine={el.isMine}
                        />
                )
            });

            grid.push(<div key={`r${idx}`}>{rows}</div>);
        });

        // for (var r = 0; r < this.props.grid.rows; r++) {
        //     let rows = [];
        //     for (var c = 0; c < this.props.grid.columns; c++) {
        //         let cid = `c${r}:${c}`;
        //         rows.push(
        //             <Cell
        //                 key={cid}
        //                 id={cid}
        //                 styles={this.props.styles.image} />);
        //     }
        //     let rid = `r${r}`;
        //     grid.push(<div key={rid}>{rows}</div>);
        // }

        return (
            <div className="grid">
                {grid}
            </div>
        );
    }
}

export default Board;