'use strict';

import {combineReducers} from 'redux';
import board from './boardReducer';
import timer from './timerReducer';
import difficulty from './difficultyReducer';

const rootReducer = combineReducers({
    board,
    timer,
    difficulty
});

export default rootReducer;