import React from 'react';
import './input.css';

const Input = ({field, fieldName, onChange}) => {

        return (
            <div className='custom-input'>
            <label htmlFor={fieldName}>{fieldName}</label>
            <input 
                id={fieldName}
                onChange={onChange} 
                value={field}/>
            </div>
        )
    }

export default Input;