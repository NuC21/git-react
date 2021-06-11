import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Hamsters } from './hamsters';
import { Species } from './species';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            hamsters: Hamsters,
            species: Species,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),  
        applyMiddleware(thunk, logger)
    );

    return store;
};