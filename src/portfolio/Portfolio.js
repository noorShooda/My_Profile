import React from 'react';
import { connect } from 'react-redux';

import './portfolio.css';
import { ListDisplayer } from './listDisplayer/ListDisplayer';
import { getPortfolioTools } from '../client/client';
import { getPortfolioLanguage, getPortfolioLanguageFail, updatePortfolioLanguageRequest } from './actions';
import { ErrorHandler } from '../errorHandler/ErrorHandler';

class Portfolio extends React.Component{

    state={portfolioTools:[], portfolioToolsIsError:false};

    componentDidMount(){
        this.props.getPortfolioLaguage();

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
    
    displayPortfolioLanguages() {
        if (this.props.portfolioLanguageIsError){
           return <ErrorHandler error="There was an error in the get portfolio languages !"/>;
        }
        else {
            return(
                <ListDisplayer 
                    languagePortfolio={this.props.portfolioLanguage} 
                    updateItem={this.props.updateLanguagePortfolio}
                />
            );
        }
    }

    displayPortfolioTools() {
        if (this.state.portfolioToolsIsError){
            return <ErrorHandler error="There was an error in the get portfolio Tools !"/>; 
        }
        else {
            return <p>{this.state.portfolioTools.join('-')}</p>;
        }
    }
   
    render(){
        return(
            <div className="portfolioStyle">
                <p className="pageHeader">Hello Portfolio</p>
                {this.displayPortfolioLanguages()}
                {this.displayPortfolioTools()}
            </div>
        );
    }
}

const mapActionToProps = {
    getPortfolioLaguage: getPortfolioLanguage,
    getPortfolioLanguageFail: getPortfolioLanguageFail,
    updateLanguagePortfolio: updatePortfolioLanguageRequest
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