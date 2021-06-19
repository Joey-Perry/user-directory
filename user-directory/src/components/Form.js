import React from 'react';
import CustomInput from './Input.js';
import './form.css'

const Form = ({onSubmit, onChange, first, last, city, country, employer, title, movies }) => {


    const submitForm = (e) => {
        e.preventDefault();
        onSubmit();
    }

        return (
            <form className='new-user-form'>
                <h1> Enter new user: </h1>
                    <div className='form-name'>
                        <CustomInput onChange={(event) => onChange(event)} field={first} fieldName='First Name'/>
                        <CustomInput  onChange={onChange} field={last} fieldName='Last Name'/>
                    </div>

                    <div className='form-location'>
                        <CustomInput onChange={onChange} field={city} fieldName='City'/>
                        <CustomInput onChange={onChange} field={country} fieldName='Country'/>
                    </div>

                    <div className='form-job-info'>
                        <CustomInput onChange={onChange} field={title} fieldName='Job Title' />
                        <CustomInput onChange={onChange} field={employer} fieldName='Employer'/>
                    </div>

                    <CustomInput onChange={onChange} field={movies} fieldName='Favorite Movies'/>

                    <button onClick={submitForm} className='form-btn'>SUBMIT</button>
            </form>
        )
}

export default Form;