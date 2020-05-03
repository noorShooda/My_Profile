import { GET_LANGUAGE_SUC, GET_LANGUAGE_FAIL, UPDATE_LANGUAGE_SUC,UPDATE_LANGUAGE_FAIL } from './actions';

const initialState = {languagePortfolio:[],languagePortfolioIsError:false, updateError:false}
export const protfolioReducer=(state = initialState, action) => {
    switch(action.type){
        case GET_LANGUAGE_SUC:{
            return(
                {
                    languagePortfolio:action.payload,
                    languagePortfolioIsError: false,
                    updateError: state.updateError
                }
            );
        }
        case GET_LANGUAGE_FAIL:{
            return(
                { 
                    languagePortfolio: state.languagePortfolio,
                    languagePortfolioIsError: action.payload,
                    updateError: state.updateError
                }
            );
        }
        case UPDATE_LANGUAGE_FAIL:{
            return(
                { 
                    languagePortfolio: state.languagePortfolio,
                    languagePortfolioIsError: state.languagePortfolioIsError,
                    updateError: action.payload
                }
            );
        }
        case UPDATE_LANGUAGE_SUC:{
            return(
                { 
                    languagePortfolio: action.payload,
                    languagePortfolioIsError: state.languagePortfolioIsError,
                    updateError: false
                }
            );
        }
        default:{
            return(
                {
                    languagePortfolio: state.languagePortfolio,
                    languagePortfolioIsError: state.languagePortfolioIsError,
                    updateError:state.updateError
                }
            );
        }
    }
}