import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

export default (preLoadedState = {}) => createStore(
  rootReducer, preLoadedState,
  applyMiddleware(thunk, logger)
);
