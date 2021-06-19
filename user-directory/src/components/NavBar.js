import React from 'react';
import Button from './Button.js';

const NavBar = ({previousUser, nextUser, editUser, deleteUser, createUser}) => {
    return (
        <nav>
            <Button handleClick={previousUser} text={`< Previous`}/>
            <Button handleClick={editUser} text={`Edit`} />
            <Button handleClick={deleteUser} text={`Delete`} />
            <Button handleClick={createUser} text={`New`} />
            <Button handleClick={nextUser} text={`Next >`}/>
        </nav>
    )
}

export default NavBar;