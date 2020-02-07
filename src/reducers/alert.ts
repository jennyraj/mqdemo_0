import {SET_ALERT} from '../actions/types';


const initialState: any = [];

export default function (state = initialState, action: any) {
    const {type, payload} = action;


    switch (type) {

        case SET_ALERT:
            return [...state, payload];

        case SET_ALERT:
            return state.filter((x: { id: any; }) => x.id !== payload);

        default:
            return state;
    }
}