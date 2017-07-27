import {TIMER_START, TIMER_STOP, TIMER_TICK} from './actionTypes';
import options from '../constants/gameOptions';

let timer = null;

export function timerStart() {
    return function(dispatch) {
        dispatch({
            type: TIMER_START
        });

        dispatch(timerTick());
    };
}

export function timerTick() {
    return function(dispatch) {
        timer = setInterval(() => {
            dispatch({
                type: TIMER_TICK
            });
        }, options.timer.delay);
    };
}

export function timerStop() {
    return function(dispatch) {
        clearInterval(timer);

        dispatch({
            type: TIMER_STOP
        });
    };
}