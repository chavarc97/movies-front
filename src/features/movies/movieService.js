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

const getMovies = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

const movieService = {
    createMovie,
    getMovies
}

export default movieService;