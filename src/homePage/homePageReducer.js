import { GET_STUDIES_PATH_SUC, GET_STUDIES_PATH_FAIL } from './actions';

const initialState = {studiesPaths:[], studiesPathsIsError:false};

export const homePageReducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_STUDIES_PATH_SUC:{
            return(
                {
                    studiesPaths: action.payload,
                    studiesPathsIsError: false
                }
            );
        }
        case GET_STUDIES_PATH_FAIL:{
            return(
                {
                    studiesPaths: state.studiesPaths,
                    studiesPathsIsError: action.payload
                }
            );
        }
        default:
            {
                return(
                    {
                        studiesPaths: state.studiesPaths,
                        studiesPathsIsError: state.studiesPathsIsError
                    }
                );
            }
    }
}