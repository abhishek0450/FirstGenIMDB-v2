import express from 'express';
import axios from 'axios';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());


app.use(express.json());

app.get('/tmdb-api/movie/popular/', async (req, res) => {
  try {
    const apiKey = '789d07148ac9596cfc9028dc63928cec';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    const response = await axios.get(apiUrl);
    res.json(response.data.results);
    console.log("Data fetched:", response.data.results);
  } catch (error) {
    console.error('Error proxying request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
