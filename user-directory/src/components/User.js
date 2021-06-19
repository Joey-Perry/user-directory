import React from 'react';
import './user.css'

const User = ({activeUser, userList}) => {
        const {id, name, city, country, title, employer, favoriteMovies} = activeUser;
        const listLength = userList.length;

        return (
            <section className='user'>
                <h2 className='index'>{id} / {listLength}</h2>

                <h1 className='name'>{name.first} {name.last}</h1>

                <h3><strong>From:</strong> {city}, {country}</h3>
                <h3><strong>Job Title:</strong>{title}</h3>
                <h3 className='employer'><strong>Employer:</strong>{employer}</h3>

                <h3><strong>Favorite Movies:</strong></h3>
                <section className='movie-list'>
                    <ol>
                        {favoriteMovies.map((movie, i) => <li key={i}>{movie}</li>)}
                    </ol>
                </section>
                
            </section>
        )
    }

export default User;