import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchMovies/movieAPI';
import { ReviewItem } from 'components';


const ReviewItem = ({ author, content }) => {
 const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(data => {
        console.log(data);
        setReviews(data);
      })
      .catch(console.log);
  }, [movieId]);
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <ReviewItem key={review.id} {...review} />
          ))}
        </ul>
      ) : (
        <p>There are not any reviews for this movie yet </p>
      )}
    </>
  );
};
ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default ReviewItem;