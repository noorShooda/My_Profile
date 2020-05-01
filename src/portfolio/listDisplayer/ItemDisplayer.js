import React from 'react';

import './itemDisplayer.css';
import { PopupWrapper } from '../../popupWrapper/PopupWrapper';

import { fromatTime } from "./helper";

class ItemDisplayer extends React.Component {
    
    constructor(){
        super();
        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    state = {showPopupSwitcher:false}; 

    fromTimeTransform() { 
        return(fromatTime(this.props.from));
    }

    toTimeTransform() {
         return(fromatTime(this.props.to)); 
    }

    showPopup() {
        this.setState({showPopupSwitcher:true});
    }

    closePopup() {
        this.setState({showPopupSwitcher:false});
    }

    render() {
        return(
            <div className="itemStyle">
                <p><span className="subtitle">language</span> : {this.props.language}</p>
                <p><span className="subtitle">Number of project</span> : {this.props.numberOfProject}</p>
                <p><span className="subtitle">from</span> {this.fromTimeTransform()} to {this.toTimeTransform()}</p>
                <div className="editButtonParentStyle"><button onClick={this.showPopup}>Edit</button></div>
                {
                    this.state.showPopupSwitcher && 
                    <PopupWrapper 
                        onClose={this.closePopup}
                        language={this.props.language} 
                        numberOfProject={this.props.numberOfProject}
                        from={this.props.from}
                        to={this.props.to}
                        update={this.props.update}
                        id={this.props.id}
                    />
                }
            </div>
        );
    }
}
export {ItemDisplayer};