'use strict';

export const changeLevel = (levelType) => {
    return function(dispatch) {
        dispatch({
            type: levelType
        });
    };
}