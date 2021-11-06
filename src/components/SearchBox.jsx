import React from 'react';
import './movie.css';


const SearchBox = (props) => {
    return(
        <div className="search-bar">
            <input 
            className="search"
            type="text"
            // id="search" 
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Search Movie.." 
            ></input>
        </div>
    )
}

export default SearchBox