import * as ActionTypes from './ActionTypes';
import { SPECIES } from "./../shared/species";

export const Species = (state = { isLoading: true,
    errMess: null,
    species: [] }, action) => {
switch (action.type) {
case ActionTypes.ADD_SPECIES:
return {...state, isLoading: false, errMess: null, partners: action.payload};

case ActionTypes.SPECIES_LOADING:
return {...state, isLoading: true, errMess: null, partners: []}

case ActionTypes.SPECIES_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
};