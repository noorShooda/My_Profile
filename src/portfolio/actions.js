export const GET_LANGUAGE ="getPortfolioLanguage";
export const GET_LANGUAGE_FAIL="getPortfolioLanguageFail";
export const GET_LANGUAGE_SUC="getPortfolioLanguageSuccess";

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