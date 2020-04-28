import axios from 'axios';

export const getLanguagePortfolio = async ()=>{
    const response = await axios.get('http://localhost:4000/languagePortfolio') ;
    return(response.data);
}
export const getPortfolioTools = async ()=>{
    const response = await axios.get('http://localhost:4000/portfolioTools');
    return(response.data);
}