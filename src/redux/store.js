import { createStore, applyMiddleware, combineReducers } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// reducers
import { userReducer } from './reducers';

// middlewares
const middlewares = [thunk];

// use logger in developement
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger(); // logger is last
  middlewares.push(logger);
}

// rootReducer and store
const rootReducer = combineReducers({ userReducer });

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
