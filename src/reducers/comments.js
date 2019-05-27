import {SAVE_COMMENT} from 'action/types';
export default function (state=[],action){
    switch(action.types){
        case SAVE_COMMENT:
            return [...state, action.payload]
        default:
            return state;
    }
}