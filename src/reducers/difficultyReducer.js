'use strict';

import * as types from '../actions/actionTypes';
import initialState from '../constants/initialState';
import options from '../constants/gameOptions';

export default (state = initialState.difficulty, action) => {
    switch (action.type) {
    case types.CHANGE_DIFFICULTY_EASY:
        return {
            ...state,
            level: options.levels.easy
        };
    case types.CHANGE_DIFFICULTY_NORMAL:
        return {
            ...state,
            level: options.levels.normal
        };
    case types.CHANGE_DIFFICULTY_HARD:
        return {
            level: options.levels.hard
        };
    default:
        return state;
    }
};