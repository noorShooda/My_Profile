import React from 'react';

import './portfolio.css';
import { ListDisplayer } from './listDisplayer/ListDisplayer';
import { getLanguagePortfolio } from '../client/client'

class Portfolio extends React.Component{

    state={languagePortfolio:[]};

    componentDidMount(){
        const languagePortfolio = getLanguagePortfolio();
        this.setState({languagePortfolio}); 
    }
   
    render(){
        return(
            <div className="portfolioStyle">
            <p>Hello Portfolio</p>
            <ListDisplayer languagePortfolio={this.state.languagePortfolio}/>
            </div>
        )
    }
}
export {Portfolio};