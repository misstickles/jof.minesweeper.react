import * as types from '../actions/actionTypes';

export default {
    board: {
        defaultCell: {
            isMine: false,
            isFlag: false,
            isUnknown: false,
            isOpened: false,
            value: 0,
        },
        // TODO: get setup from an already defined level
        level: {
            rows: 10,
            cols: 10,
            mines: 10,
            label: "Easy",
            action: types.CHANGE_DIFFICULTY_EASY
        }
    },
    levels: {
        easy: {
            rows: 10,
            cols: 10,
            mines: 10,
            label: "Easy",
            action: types.CHANGE_DIFFICULTY_EASY
        },
        normal: {
            rows: 16,
            cols: 16,
            mines: 40,
            label: "Normal",
            action: types.CHANGE_DIFFICULTY_NORMAL
        },
        hard: {
            rows: 16,
            cols: 30,
            mines: 100,
            label: "Hard",
            action: types.CHANGE_DIFFICULTY_HARD
        }
    },
    timer: {
        delay: 100
    }
};