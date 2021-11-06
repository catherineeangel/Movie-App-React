import React, { useEffect, useState } from 'react';
import AddFavorite from './components/AddFavorite';
import Logo from './components/Logo';
import './components/movie.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading'
import RemoveFavorite from './components/RemoveFavorite';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorite, setFavorite] = useState([]);

  //  ini func buat search movies
  const getMovieRequest = async () => {
    // API KEYS
    const API_KEY = 'api_key=da03529120653a027860abf535701f3a';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
    const searchURL = BASE_URL + '/search/movie?' + API_KEY + '&query=' ;

    const responseDef = await fetch(API_URL);
    const responseDefJson = await responseDef.json();
    
    const url = searchURL+searchValue
    const response = await fetch(url);
    const responseJson = await response.json(); 
    // test
    console.log(responseJson);

    if(searchValue){
      if (responseJson.results) {
        setMovies(responseJson.results);
      }
    }else{
      setMovies(responseDefJson.results);
    }
  }
  // tampilih movie yang di search
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorite = JSON.parse(localStorage.getItem('react-movie-app-favorite'));

    setFavorite(movieFavorite)
  }, [])

  // func to save fav movies 
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorite', JSON.stringify(items))
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorite, movie];
    setFavorite(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  }

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorite.filter(
        (fav) => fav.id !== movie.id
      );
    setFavorite(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  }

  return (
    <div>
      <div className='navbar'>
        <Logo />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      {/* Movie List */}
      <MovieListHeading heading='Movies'/>
      <MovieList movies={movies} handleFavoriteClick={addFavoriteMovie} favoriteComponent={AddFavorite}/>

      {/* Favorite List */}
      <MovieListHeading heading='Wishlist'/>
      <MovieList movies={favorite} handleFavoriteClick={removeFavoriteMovie} favoriteComponent={RemoveFavorite}/>
    </div>
  );
}

export default App;
