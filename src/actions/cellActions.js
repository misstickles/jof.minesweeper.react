import * as types from './actionTypes';

export const revealTile = (clickedCell) => ({
    type: types.REVEAL_TILE,
    clickedCell
});

export const toggleFlag = (clickedCell) => ({
    type: types.TOGGLE_FLAG,
    clickedCell
});

export const gameOver = (clickedMine) => ({
    type: types.GAME_OVER,
    clickedMine
});