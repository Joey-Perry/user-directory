import React from 'react';
import './input.css';

const Input = ({fieldName, onChange}) => {

        return (
            <div className='custom-input'>
            <label for={fieldName}>{fieldName}</label>
            <input 
                onChange={onChange}
                value={this.state.input}/>
            </div>
        )
    }

export default Input;