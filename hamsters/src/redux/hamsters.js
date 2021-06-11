import * as ActionTypes from './ActionTypes';


export const Hamsters = (state = {
    isLoading: true,
    errMess: null,
    hamsters: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_HAMSTERS:
        return {...state, isLoading: false, errMess: null, hamsters: action.payload};
    case ActionTypes.HAMSTERS_LOADING:
        return {...state, isLoading: true, errMess: null, hamsters: []};
    case ActionTypes.HAMSTERS_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};