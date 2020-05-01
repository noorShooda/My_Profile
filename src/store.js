import { createStore, combineReducers, applyMiddleware }from 'redux';
import  createSagaMiddleware from 'redux-saga';

import { protfolioReducer } from './portfolio/portfolioReducer';
import { getPortfolioLanguageListner } from './portfolio/saga';

const sagaMiddleware = createSagaMiddleware();
export const stateStore = createStore(
    combineReducers({portfolioState:protfolioReducer}),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(getPortfolioLanguageListner);