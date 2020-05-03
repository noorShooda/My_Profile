import { fork, all } from 'redux-saga/effects';

import { getPortfolioLanguageListner, updateLanguagePortfolioListner} from './portfolio/saga';
import { getStudiesPathsListner } from './homePage/homePageSaga';

function * rootSaga() {
    yield all(
        [
            fork(getPortfolioLanguageListner),
            fork(updateLanguagePortfolioListner),
            fork(getStudiesPathsListner)
        ]
    )
}
export default rootSaga;