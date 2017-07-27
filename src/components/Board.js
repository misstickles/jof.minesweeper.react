'use strict';

import React, {PropTypes} from 'react';
import Cell from './Cell';
import Flag from './Flag';

class Board extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            board: []
        };

        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
    }

    onLeftClick(id) {

    }

    onRightClick(id) {

    }

    render() {
        return (
            <div>board</div>
            // // map each cell
            // this.state.board.map(cell => {
            //     <Cell
            //         key={cell.id}
            //         {...cell}
            //         onClick={() => this.onLeftClick}
            //         onContextMenu={() => this.onRightClick}
            //     />
            // })
        );
    }
}

export default Board;