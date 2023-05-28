import { Route, Routes } from 'react-router-dom';
import { Home, MovieDetails, Movies } from 'pages';
import { Layout, Cast, Reviews } from 'components';
import { fetchTrendingMovies } from 'services/fetchMovies/movieAPI';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./Layout/Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

fetchTrendingMovies();
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />

              <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Route>
      </Routes>
    </>