import axios from "axios";

const API_URL = "https://fine-sari-bull.cyclic.app/api/movies/";

const getMovies = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}
const getMovieById = async (id) => {
    const response = await axios.get(`${API_URL}${id}`);
    return response.data;
}

const createMovie = async (movie, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL, movie, config);
    return response.data;
}





const movieService = {
getMovies,
getMovieById,
createMovie,
}

export default movieService;