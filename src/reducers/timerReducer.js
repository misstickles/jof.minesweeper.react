'use strict';

import {TIMER_START, TIMER_STOP, TIMER_TICK} from '../actions/actionTypes';
import initialState from '../constants/initialState';

export default (state = initialState.timer, action) => {
    switch(action.type) {
    case TIMER_START:
        return {
            ...state,
            isRunning: true,
            time: 0,
            offset: Date.now()
        };
    case TIMER_STOP:
        return {
            ...initialState.timer,
            time: state.time
        };
    case TIMER_TICK:
        return {
            ...state,
            time: Date.now() - state.offset
        };
    default:
        return state;
    }
};