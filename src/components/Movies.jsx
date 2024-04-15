// Movies.js
import  { useContext } from 'react';
import {MovieContext} from '../context/MovieContext';
import MoviesCard from './MoviesCard';


function Movies() {
  const { movies } = useContext(MovieContext);

  return (
    <div className="flex flex-wrap justify-center">
      {movies.map(movie => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
