import { takeLatest, call, put } from 'redux-saga/effects';

import { getLanguagePortfolio } from '../client/client';
import { GET_LANGUAGE, getPortfolioLanguageSuccess, getPortfolioLanguageFail } from './actions';

function * getPortfolioLanguage() {
    try {
        const response = yield call(getLanguagePortfolio);
        yield put(getPortfolioLanguageSuccess(response));
    } catch (error) {
        yield put(getPortfolioLanguageFail(true));
    }
}

export function * getPortfolioLanguageListner() {
    yield takeLatest(GET_LANGUAGE, getPortfolioLanguage);
}