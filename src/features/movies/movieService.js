import axios from "axios";

const API_URL = "https://jealous-gold-fawn.cyclic.app/api/movies/";

const createMovie = async (movieData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, movieData, config)
    return response.data
}

const getMovies = async (movieData) => {
    const response = axios.get(movieData)
}

const movieService = {
    createMovie,
    getMovies
}

export default movieService;