import * as types from '../actions/actionTypes';
import {flag, unknown, unopened} from '../constants/cellTypes';

const boardReducer = (state = [], action) => {
    switch(action.type) {
    //     case types.LEFT_CLICK_CELL:
    //         return [
    //             ...state,
    //             {
    //                 id: action.id,
    //                 container: action.container
    //             }
    //         ]
    //     case types.RIGHT_CLICK_CELL:
    //         switch(cell.name) {
    //             case unopened.name:
    //                 return state.map(cell =>
    //                     ({
    //                         ...cell, 
    //                         container: flag.image,
    //                         text: flag.text,
    //                         text: flag.text
    //                     })
    //                 )
    //             case flag.name:
    //                 return state.map(cell =>
    //                     ({
    //                         ...cell, 
    //                         image: unknown.image,
    //                         name: unknown.name,
    //                         text: unknown.text
    //                     })
    //                 )
    //             case unknown.name:
    //                 return state.map(cell =>
    //                     ({
    //                         ...cell,
    //                         image: unopened.image, 
    //                         name: unopened.name,
    //                         text: unopened.text
    //                     })
    //                 )
    //             default:
    //                 return state;
    //         }
    //     case types.GAME_OVER:
    //         return state;
        default:
            return state;
    }
};

export default boardReducer;