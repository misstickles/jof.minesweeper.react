// 'use strict';

// import React from 'react';
// import PropTypes from 'prop-types';
// import Cell from './Cell';

// const Board = ({board, onLeftClick, onRightClick}) => (
//     <div>
//           {/* {board.map(cell =>
//             <Cell
//                 key={cell.id}
//                 {...cell}
//                 onClick={() => onLeftClick(cell.id)}
//                 onContextMenu={() => onRightClick(cell.id)}
//             />
//         )}   */}
//     </div>
// )

// Board.propTypes = {
//     board: PropTypes.arrayOf(PropTypes.shape({
//         image: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//         style: PropTypes.object.isRequired,
//         component: PropTypes.element.isRequired
//     }).isRequired).isRequired,
//     onLeftClick: PropTypes.func.isRequired,
//     onRightClick: PropTypes.func.isRequired
// }

// export default Board;