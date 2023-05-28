import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/fetchMovies/movieAPI';
import { ReviewItem } from 'components';
import { Info, List } from './Reviews.styled';


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
        <List>
          {reviews.map(review => (
            <ReviewItem key={review.id} {...review} />
          ))}
        </List>
      ) : (
        <Info>There are not any reviews for this movie yet </Info>
      )}
    </>
  );
};
ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default ReviewItem;