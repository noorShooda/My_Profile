export const GET_LANGUAGE ="getPortfolioLanguage";
export const GET_LANGUAGE_FAIL="getPortfolioLanguageFail";

export const getPortfolioLanguage = (portfolioLanguages) => {
    return(
        {
            type : GET_LANGUAGE,
            payload: portfolioLanguages
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