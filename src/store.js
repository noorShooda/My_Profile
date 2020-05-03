import { createStore, combineReducers, applyMiddleware }from 'redux';
import  createSagaMiddleware from 'redux-saga';

import { protfolioReducer } from './portfolio/portfolioReducer';
import { homePageReducer } from './homePage/homePageReducer';
import rootSaga from './mainSaga';

const sagaMiddleware = createSagaMiddleware();
export const stateStore = createStore(
    combineReducers(
        {
            portfolioState: protfolioReducer,
            homePageState: homePageReducer
        }
    ),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);