import React from 'react';

import './portfolio.css';
import { ListDisplayer } from './listDisplayer/ListDisplayer';
import { getLanguagePortfolio, getPortfolioTools } from '../client/client'

class Portfolio extends React.Component{

    state={languagePortfolio:[],portfolioTools:[], languagePortfolioIsError:false,portfolioToolsIsError:false};

    componentDidMount(){
        getLanguagePortfolio()
        .then(
            (response)=>{this.setState({languagePortfolio: response});},
            ()=>{
                this.setState({languagePortfolioIsError:true});
            }
        );

        getPortfolioTools()
        .then(
            (response)=>{this.setState({portfolioTools: response});},
            ()=>{
                this.setState({portfolioToolsIsError:true});
            }
        );
    }
   
    render(){
        return(
            <div className="portfolioStyle">
            <p className="pageHeader">Hello Portfolio</p>
            <ListDisplayer languagePortfolio={this.state.languagePortfolio}/>
            <p>{this.state.portfolioTools.join('-')}</p>
            </div>
        )
    }
}
export {Portfolio};