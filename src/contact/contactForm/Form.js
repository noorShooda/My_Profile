import React, { useState } from 'react';

import './form.css';

export const Form = () => {
    
    const [formElement, setFormElement] = useState({
        name: "",
        last_name: "",
        age: "", 
        topic: "",
        note: ""
    });
    
   const handleChange = (event) => {
        const nam = event.target.name;
        const val = event.target.value;
        const newFormElement = {...formElement,[nam]: val};
        setFormElement(newFormElement);
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setFormElement({
            name: "",
            last_name: "",
            age: "", 
            topic: "",
            note: ""
        });
    };

    return(
        <form className="formStyle" onSubmit={handleSubmitForm }>
            <label htmlFor="name">First name:</label><br/>
            <input type="text" id="name" name="name" value={formElement.name} onChange={handleChange}/><br/>
            <label htmlFor="last-name">Last name:</label><br/>
            <input type="text" id="last-name" name="last_name" value={formElement.last_name} onChange={handleChange}/><br/>
            <label htmlFor="age">Age:</label><br/>
            <input type="text" id="age"name="age" value={formElement.age} onChange={handleChange}/><br/>
            <label htmlFor="topics">Choose a topic :</label><br/>
            <select id="topics" name="topic" value={formElement.topic} onChange={handleChange}>
                <option value="personalContact">Contact for personal affairs</option>
                <option value="contactForBug">Contact for a bug</option>
                <option value="contactForrecruitment">Contact for Recruitment</option>
            </select><br/>
            <label htmlFor="note">Note:</label><br/>
            <textarea id="note" name="note" rows="10" cols="30" value={formElement.note} onChange={handleChange}/><br/>
            <button type="submit">Submit</button>
        </form>                
    );
};
