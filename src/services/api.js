import axios from 'axios'
const BASE_URL = 'https://api.tvmaze.com';
export const fetchMoviesAndSeries = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/shows?q=${query}`);
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
