import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { SPECIES } from '../shared/species';
import { HAMSTERS } from '../shared/hamsters';

export const speciesLoading = () => ({
    type: ActionTypes.SPECIES_LOADING,
});

export const speciesFailed = errMess => ({
    type: ActionTypes.SPECIES_FAILED,
    payload: errMess
});

export const addSpecies = species => ({
    type: ActionTypes.ADD_SPECIES,
    payload: species
});


export const fetchSpecies = () => dispatch => {
    dispatch(speciesLoading());
    return fetch(baseUrl + 'species')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(species => dispatch(addSpecies(species)))
        .catch(error => dispatch(speciesFailed(error.message)));
};


export const fetchHamsters = () => dispatch => {

    dispatch(hamstersLoading());

    return fetch(baseUrl + 'hamsters')
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(hamsters => dispatch(addHamsters(hamsters)))
    .catch(error => dispatch(hamstersFailed(error.message)));
};

export const hamstersLoading = () => ({
    type: ActionTypes.HAMSTERS_LOADING
});

export const hamstersFailed = errMess => ({
    type: ActionTypes.HAMSTERS_FAILED,
    payload: errMess
});

export const addHamsters = hamsters => ({
    type: ActionTypes.ADD_HAMSTERS,
    payload: hamsters
});


export const postFeedback = feedback => () => {

    return fetch(baseUrl + 'feedback', {
            method: "POST",
            body: JSON.stringify(feedback),
            headers: {
                "Content-Type": "application/json"
            }
    })
        .then(response => {
                if (response.ok) {
                    return response
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response
                    throw error;
                }
            },
                error => { throw error; })
            .then(response => response.json())
            .then(response => {
                console.log("Feedback: ", response);
                alert('Thank you for your feedback\n ' + JSON.stringify(response))
            })
            .catch(error => {
                console.log('Feedback error', error.message);
                alert('Your Feedback could not be posted\nError: ' + error.message);
            })
};
