import { takeLatest, call, put } from 'redux-saga/effects';

import { getLanguagePortfolio } from '../client/client';
import { GET_LANGUAGE, getPortfolioLanguageSuccess, getPortfolioLanguageFail} from './actions';

function * getPortfolioLanguage(){
    try {
        console.log("saga getData called");
        const response = yield call(getLanguagePortfolio);
        console.log("saga getData",response);
        yield put(getPortfolioLanguageSuccess(response));
    } catch (error) {
        console.error(error);
        yield put(getPortfolioLanguageFail(true));
    }
}
export function * getPortfolioLanguageListner(){
yield takeLatest(GET_LANGUAGE, getPortfolioLanguage);
}