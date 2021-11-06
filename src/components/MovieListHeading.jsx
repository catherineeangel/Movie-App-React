import React from 'react';
import './movie.css';

const MovieListHeading = (props) => {
    return (
        <div className="movie-list-heading">
             <h1>{props.heading}</h1>   
        </div>
    )
}

export default MovieListHeading