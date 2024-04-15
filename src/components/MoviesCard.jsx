// MovieCard.js
import { useContext } from 'react';
import PropTypes from 'prop-types';
import {MovieContext} from '../context/MovieContext';

function MoviesCard() {
    const { movies } = useContext(MovieContext);
  return (
    <>
    <div className="h-60 w-36 bg-cover bg-center rounded-xl m-5 hover:scale-105 transition delay-102 duration-300 ease-in-out  shadow-xl shadow-black flex flex-col justify-between" style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w185/${movies.poster_path})`,
      }}>
      
      <div className="text-base text-white text-center w-full bg-gray-900/60 rounded-t-lg p-1 ">
          {movies.title}
          
        </div>

        <div className="text-base text-white text-center w-full bg-gray-900/60 rounded-b-lg p-1 ">
          {movies.vote_average}
          
        </div>
        </div>
        
      
    </>
    
  );
}

export default MoviesCard;

MoviesCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
    }).isRequired,
};