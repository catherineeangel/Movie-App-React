import React from 'react';
import './movie.css'

const MovieList = (props) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500'
    const FavoriteComponent = props.favoriteComponent;
    return (
        <div className='movie-list-wrapper'>
            <div className='movie-list' >
                {props.movies.map((movie, index) => (
                    <div className='movie-list-item'>
                        <img className='movie-img' src={IMG_URL+movie.poster_path} alt='movie'></img>
                        <span className="movie-title">{movie.title}
                        <p className="movie-year">({movie.release_date})</p>
                        <p className="movie-rating">⭐ {movie.vote_average}</p>
                        </span>
                        
                        <p className="movie-desc">{movie.overview.split(".").slice(0,1)}.</p>
                        <div 
                        onClick={() => props.handleFavoriteClick(movie)} 
                        className="movie-favorite">
                            <FavoriteComponent />
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList;