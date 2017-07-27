import options from './gameOptions';

export default {
    difficulty: {
        level: options.levels.normal
    },
    board: {
    },
    timer: {
        isRunning: false,
        time: 0,
        offset: 0
    },
};