import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PaginationRounded from "./components/PaginationRounder";
import Movies from "./components/Movies";


import { MovieContextProvider } from './context/MovieContextProvider';
// import Movies from './components/Movies'
// import MovieContextProvider from './context/MovieContext'
// import PageNumber from './components/PageNumber';

// import { Button } from '@mui/material';






function App() {
  return (
    <div>
      <Navbar />
      <MovieContextProvider>
        <Banner />
        <Movies />
        <PaginationRounded />
      </MovieContextProvider>
    </div>
  );
}

export default App;
