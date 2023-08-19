import MoviesList from './MoviesList';
import './App.css';
import Filter from './Filter';
import React, {useState} from 'react';
import Movies from './Movies';




  function App () {
    
      const [fileredMovies, setFilteredMovies] = useState(Movies)
     
      const handleFilter = (filters) => { 
      const {title, rate} = filters;
      const fileredMovies = Movies.filter(movie => {
        if(title) {
          const matchingTitle = movie.title.toLowerCase().includes(title.toLowerCase())
          return matchingTitle;
        }
        if(rate){
          const matchingRating = movie.rate >= parseInt(rate)
          return matchingRating;
        }
        return true;
        
      })
      setFilteredMovies(fileredMovies)
    }
      return (
        <>
        <h3>liste des films:</h3>
        <Filter onFilter = {handleFilter}/>
        <MoviesList movies = {fileredMovies} />

        
        </>);
        };
  
export default App;
