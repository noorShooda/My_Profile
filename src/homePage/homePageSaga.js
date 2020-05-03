import { takeLatest, call, put } from 'redux-saga/effects';

import { getStudiesPath } from '../client/client';
import { GET_STUDIES_PATH_REQUEST, getStudiesPathSuccess, getStudiesPathFail } from './actions';

function * getStudiesPaths() {
    try {
        const response = yield call(getStudiesPath);
        yield put(getStudiesPathSuccess(response));
    } catch (error) {
        yield put(getStudiesPathFail(true));
    }
}
export function * getStudiesPathsListner() {
    yield takeLatest(GET_STUDIES_PATH_REQUEST,getStudiesPaths);
}