export { default as Layout } from './Layout/Layout.jsx';
export { default as Cast } from './Cast/Cast.jsx';
export { default as Reviews } from './Reviews/Reviews.jsx';
export { default as TrendingList } from './TrendingList/TrendingList.jsx';
export { default as TrendingMovie } from './TrendingMovie/TrendingMovie.jsx';
export { default as Loader } from './Loader/Loader.jsx';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles, theme } from 'styles';
export { default as Movie } from './Movie/Movie.jsx';
export { default as Actor } from './Actor/Actor.jsx';
export { default as ReviewItem } from './ReviewItem/ReviewItem.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);