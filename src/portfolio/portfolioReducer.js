import { GET_LANGUAGE_SUC, GET_LANGUAGE_FAIL } from './actions';

const initialState = {languagePortfolio:[],languagePortfolioIsError:false}
export const protfolioReducer=(state = initialState, action)=>{
    switch(action.type){
        case GET_LANGUAGE_SUC:{
            return(
                {
                    languagePortfolio:action.payload,
                    languagePortfolioIsError: state.languagePortfolioIsError
                }
            );
        }
        case GET_LANGUAGE_FAIL:{
            return(
                { 
                    languagePortfolio: state.languagePortfolio,
                    languagePortfolioIsError: action.payload
                }
            );
        }
        default:{
            return(
                {
                    languagePortfolio: state.languagePortfolio,
                    languagePortfolioIsError: state.languagePortfolioIsError
                }
            );
        }
    }
}