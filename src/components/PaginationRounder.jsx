import  { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MovieContext from '../context/MovieContext';

export default function PaginationRounded() {
    const { page, totalPages, setPage } = useContext(MovieContext);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

   

   
  return (
    <Stack  spacing={2} className='m-10 '>
    
    <Pagination  page={page}
                onChange={handlePageChange}
                count={totalPages} className=' flex justify-center items-end ' variant="outlined" color="primary" />

                
    
  </Stack>
  );
}