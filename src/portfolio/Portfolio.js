import React from 'react';
import { connect } from 'react-redux';

import './portfolio.css';
import { ListDisplayer } from './listDisplayer/ListDisplayer';
import { getLanguagePortfolio, getPortfolioTools } from '../client/client';
import { getPortfolioLanguage, getPortfolioLanguageFail } from './actions';

class Portfolio extends React.Component{

    state={portfolioTools:[], portfolioToolsIsError:false};

    componentDidMount(){
        getLanguagePortfolio()
        .then(
            (response) => {
                this.props.getPortfolioLaguage(response);
            },
            () => {
                this.props.getPortfolioLanguageFail(true);
            }
        );

        getPortfolioTools()
        .then(
            (response) => {
                this.setState({portfolioTools: response});
            },
            () => {
                this.setState({portfolioToolsIsError:true});
            }
        );
    }
   
    render(){
        return(
            <div className="portfolioStyle">
            <p className="pageHeader">Hello Portfolio</p>
            <ListDisplayer languagePortfolio={this.props.portfolioLanguage}/>
            <p>{this.state.portfolioTools.join('-')}</p>
            </div>
        );
    }
}

const mapActionToProps = {
    getPortfolioLaguage:getPortfolioLanguage,
    getPortfolioLanguageFail:getPortfolioLanguageFail
};

const mapStateToProps = (state) => {
    return(
        {
            portfolioLanguage: state.portfolioState.languagePortfolio,
            portfolioLanguageIsError: state.portfolioState.languagePortfolioIsError
        }
    );
};

export default connect(mapStateToProps,mapActionToProps)(Portfolio);