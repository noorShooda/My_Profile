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
            <label for="fname">First name:</label><br/>
            <input type="text" name="name" value={formElement.name} onChange={handleChange}/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" name="last_name" value={formElement.last_name} onChange={handleChange}/><br/>
            <label for="age">Age:</label><br/>
            <input type="text" name="age" value={formElement.age} onChange={handleChange}/><br/>
            <label for="topic">Choose a topic :</label><br/>
            <select id="topics" name="topic" value={formElement.topic} onChange={handleChange}>
                <option value="personalContact">Contact for personal affairs</option>
                <option value="contactForBug">Contact for a bug</option>
                <option value="contactForrecruitment">Contact for Recruitment</option>
            </select><br/>
            <label for="note">Note:</label><br/>
            <textarea name="note" rows="10" cols="30" value={formElement.note} onChange={handleChange}/><br/>
            <button type="submit">Submit</button>
        </form>                
    );
};
