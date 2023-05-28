import { Movie } from 'components';
import React, { useEffect, useState } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { fetchMovie } from 'services/fetchMovies/movieAPI';
import { Loader } from 'components';

const MovieDetails = () => {
 const { movieId } = useParams();
const location = useLocation();
  const [movieData, setMovieData] = useState(null);
    const [showLoader, setShowLoader] = useState(false);
    const backUpLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setShowLoader(true);
    fetchMovie(Number(movieId))
      .then(setMovieData)
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, [movieId]);

  return (
      <section>
           <Link to={backUpLinkRef.current}>Back to</Link>
      {showLoader && <Loader visible={showLoader} />}
      {movieData && <Movie movieData={movieData} />}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
     <Suspense fallback={<div>Please wait. We are in a process...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;