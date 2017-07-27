'use strict';

import options from '../constants/gameOptions';
import * as types from '../actions/actionTypes';

// TODO: this is a string, but should be at least a constant...
export function changeLevel(levelType) {
    let level = types.CHANGE_DIFFICULTY_NORMAL;

    switch (levelType) {
        case options.levels.easy.label:
            level = types.CHANGE_DIFFICULTY_EASY;
            break;
        case options.levels.normal.label:
            level = types.CHANGE_DIFFICULTY_NORMAL;
            break;
        case options.levels.hard.label:
            level = types.CHANGE_DIFFICULTY_HARD;
            break;
    }

    return function(dispatch) {
        dispatch({
            type: level
        });
    };
}