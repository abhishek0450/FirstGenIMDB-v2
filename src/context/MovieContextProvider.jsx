
import { PropTypes } from 'prop-types';
// MovieContextProvider.jsx
import  {  useState, useEffect } from 'react';
import axios from 'axios';
import  MovieContext  from './MovieContext';



export const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0); // State for total number of pages
  
    const nextPage = () => {
      setPage(page + 1);
    };
  
    const prevPage = () => {
      setPage(page - 1);
    };

  
  
    useEffect(() => {
      axios
        .get(
          `/tmdb-api/movie/popular`
        )
        .then(function (response) {
          setMovies(response.data.results);
          setTotalPages(response.data.total_pages); 
          console.log("Data fetched:", response.data.results);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });
    }, [page]);
  
    return (
      <MovieContext.Provider value={{ movies, nextPage, prevPage, page, totalPages, setPage }}>
        {children}
      </MovieContext.Provider>
    );
  };

export default MovieContextProvider;

MovieContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };