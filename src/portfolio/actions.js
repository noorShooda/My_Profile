export const GET_LANGUAGE ="getPortfolioLanguage";
export const GET_LANGUAGE_FAIL="getPortfolioLanguageFail";
export const GET_LANGUAGE_SUC="getPortfolioLanguageSuccess";
export const UPDATE_LANGUAGE_FAIL="updatePortfolioLanguageFail";
export const UPDATE_LANGUAGE_REQUEST="updatePortfolioLanguageRequest";
export const UPDATE_LANGUAGE_SUC="updatePortfolioLanguageSuccess";

export const getPortfolioLanguage = () => {
    return(
        {
            type : GET_LANGUAGE,
        }
    );
};

export const getPortfolioLanguageFail = (error) => {
    return(
        {
            type: GET_LANGUAGE_FAIL,
            payload: error    
        }
    );
};

export const getPortfolioLanguageSuccess = (data) => {
    return(
        {
            type: GET_LANGUAGE_SUC,
            payload: data   
        }
    );
};

export const updatePortfolioLanguageRequest = (id,data) =>{
    return(
        {
            type: UPDATE_LANGUAGE_REQUEST,
            payload:{
                id: id,
                data: data
            }
        }
    )
};

export const updatePortfolioLanguageSuccess = (data) =>{
    return(
        {
            type: UPDATE_LANGUAGE_SUC,
            payload:data
        }
    )
};

export const updatePortfolioLanguageFail = (error) =>{
    return(
        {
            type: UPDATE_LANGUAGE_FAIL,
            payload:error
        }
    )
};