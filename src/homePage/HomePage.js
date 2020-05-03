import React from 'react';
import { connect } from 'react-redux';

import './homePage.css';

import { getStudiesPathRequest } from './actions';
import { ErrorHandler } from '../errorHandler/ErrorHandler';
import { ListDisplayer } from './listDisplayer/ListDisplayer';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.displayStudiesPath=this.displayStudiesPath.bind(this);
    }

    componentDidMount(){
       this.props.getStudiesPath(); 
    }
    displayStudiesPath() {
        if (this.props.studiesPathsIsError){
           return <ErrorHandler error="There was an error in the get portfolio languages !"/>;
        }
        else {
            return(
                <ListDisplayer 
                    path={this.props.studiesPaths} 
                    
                />
            );
        }
    }
    render(){
        return(
            <div className="homePageStyle">
                {this.displayStudiesPath()}
            </div>
        );
    }
}
const mapActionToProps = {
    getStudiesPath: getStudiesPathRequest
}
const mapStateToProps = (state) => {
    return(
        {
            studiesPaths: state.homePageState.studiesPaths,
            studiesPathsIsError: state.homePageState.studiesPathsIsError
        }
    )
}
export default connect(mapStateToProps,mapActionToProps)(HomePage);