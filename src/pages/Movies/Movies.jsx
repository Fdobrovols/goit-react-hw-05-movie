import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';
import { Loader } from 'components';
import { fetchMoviesByName } from 'services/movieAPI/movieAPI';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieList = searchParams.get('query');

  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!movieList) return;

    fetchMoviesByName(movieList)
      .then(setMovies)
      .finally(() => setShowLoader(false));
  }, [movieList]);

  const updateParams = params => {
    setSearchParams(params);
  };

  return (
    <section>
      <Form updateParams={updateParams} />
      <Loader visible={showLoader} />
      {movieList.length > 0 && <MovieList movies={movies} />}
    </section>
  );
};

export default Movies;
