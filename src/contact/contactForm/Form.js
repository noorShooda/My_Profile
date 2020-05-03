import React from 'react';

import './form.css';

class Form extends React.Component {
    constructor() {
        super();
        this.handleChange=this.handleChange.bind(this);
        this.handleButtonChange=this.handleButtonChange.bind(this);
    }

    state = {
        name:"",
        last_name:"",
        age:null, 
        topic:"",
        note:""
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    handleButtonChange() {
        this.setState({name:"test",last_name:"",age:null, topic:"",note:""});
    }

    render() {
        return(
            <form className="formStyle">
                        <label for="fname">First name:</label><br/>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
                        <label for="lname">Last name:</label><br/>
                        <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/><br/>
                        <label for="age">Age:</label><br/>
                        <input type="text" name="age" value={this.state.age} onChange={this.handleChange}/><br/>
                        <label for="topic">Choose a topic :</label><br/>
                        <select id="topics" name="topic" onSelect={this.handleChange}>
                                <option value="personalContact">Contact for personal affairs</option>
                                <option value="contactForBug">Contact for a bug</option>
                                <option value="contactForrecruitment">Contact for Recruitment</option>
                        </select><br/>
                        <label for="note">Note:</label><br/>
                        <textarea name="note" rows="10" cols="30" value={this.state.note} onChange={this.handleChange}/><br/>
                        <button onClick={this.handleButtonChange}>Submit</button>
                        </form>                
        )
    }
}
export {Form};