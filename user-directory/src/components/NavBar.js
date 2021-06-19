import React from 'react';
import Button from './Button.js';
import './navbar.css'

const NavBar = ({previousUser, nextUser, editUser, deleteUser, createUser}) => {
    return (
        <nav className='nav-bar'>
            <Button handleClick={previousUser} text={`< Previous`}/>
            <div className='change-list-btns'>
                <Button handleClick={editUser} text={`Edit`} />
                <Button handleClick={deleteUser} text={`Delete`} />
                <Button handleClick={createUser} text={`New`} />
            </div>
            <Button handleClick={nextUser} text={`Next >`}/>
        </nav>
    )
}

export default NavBar;