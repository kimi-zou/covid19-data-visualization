import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import allReducer from './all';

const rootReducer = combineReducers({
  all: allReducer
  // continent: continentReducer,
  // country: countryReducer,
  // state: stateReducer
});

const logger = require('redux-logger').default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
