import { createStore, applyMiddleware, combineReducers } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// reducers
import { searchReducer, userReducer } from './reducers';

// middlewares
const logger = createLogger();
const middlewares = [logger, thunk];

// rootReducer and store
const rootReducer = combineReducers({ searchReducer, userReducer });

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
