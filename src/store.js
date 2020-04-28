import { createStore, combineReducers }from 'redux';
import { protfolioReducer } from './portfolio/portfolioReducer';

export const stateStore = createStore(
    combineReducers({portfolioState:protfolioReducer})
);