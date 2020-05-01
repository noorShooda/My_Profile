import React from 'react';

import './popupWrapper.css';

class PopupWrapper extends React.Component {

    constructor(props){
        super(props);
        this.changeValue=this.changeValue.bind(this);
        this.updateValue=this.updateValue.bind(this);
    }

    state = { language: this.props.language};

    changeValue(e) {
        this.setState({language: e.target.value});
    }
    updateValue(){
        this.props.update(this.props.id,{
            language: this.state.language,
            numberOfProject: this.props.numberOfProject,
            duration: {
                from: this.props.from,
                to: this.props.to
            }
        });
        this.props.onClose();
    }
    render(){
        return(
            <div className="overlay">
                <div className="popup">
                    <p>Language: <input value={this.state.language} size="5" onChange={this.changeValue}/></p>
                    <p>Number of Projects: {this.props.numberOfProject}</p>
                    <button onClick={this.updateValue}disabled={this.state.language === this.props.language}>Save</button>
                    <button onClick={this.props.onClose}>Close Popup</button>
                </div>
            </div>
        );
    }
}
export {PopupWrapper};