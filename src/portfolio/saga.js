import { takeLatest, call, put } from 'redux-saga/effects';

import { getLanguagePortfolio ,updatePrtfolioLanguages } from '../client/client';
import { GET_LANGUAGE, getPortfolioLanguageSuccess, getPortfolioLanguageFail, updatePortfolioLanguageSuccess, updatePortfolioLanguageFail,UPDATE_LANGUAGE_REQUEST } from './actions';

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

function * updateLanguagePortfolio(action) {
    try {
        yield call(updatePrtfolioLanguages,action.payload.id,action.payload.data);
        const response = yield call(getLanguagePortfolio);
        yield put(updatePortfolioLanguageSuccess(response));
    } catch (error) {
        yield put(updatePortfolioLanguageFail(true))
    }
}

export function * updateLanguagePortfolioListner() {
    yield takeLatest(UPDATE_LANGUAGE_REQUEST, updateLanguagePortfolio)
}



