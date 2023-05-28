import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=ff432fdbfbbc40783dc9bfdd803ea5e1';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trending/all/day?${KEY}`);
    const moviesList = response.data.results;
    return moviesList;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMovie = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${movieId}?${KEY}`);

    const { poster_path, title, vote_average, overview, genres } =
      response.data;
    return { poster_path, title, vote_average, overview, genres };
  } catch (error) {
    console.log(error.message);
  }
};
};

export const fetchMovie = async movieId => {
    const cast = response.data.cast.map(
      ({ name, character, id, profile_path }) => ({
        name,
        character,
        id,
        profile_path,
      })
    );
    return cast;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?${KEY}`
    );

    const reviews = response.data.results.map(({ author, id, content }) => ({
      author,
      id,
      content,
    }));

    return reviews;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesByName = async movieName => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${movieId}?${KEY}`);

    const { poster_path, title, vote_average, overview, genres } =
      response.data;
    return { poster_path, title, vote_average, overview, genres };
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=ff432fdbfbbc40783dc9bfdd803ea5e1'
    );
    // const moviesList = response.data.results.map(({ id, title }) => ({
    //   id,
    //   title,
    // }));
    const moviesList = response.data.results;
    console.log(moviesList);
    return moviesList;
  } catch (error) {
    console.log(error.message);
  }
};