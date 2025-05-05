import { getReviews } from 'api/tmdb';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { states } from 'utils/constants';
import CenteredSpinner from './CenteredSpinner';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [state, setState] = useState(states.LOADING);

  useEffect(() => {
    getReviews(movieId)
      .then(data => {
        setReviews(data);
        setState(states.LOADED);
      })
      .catch(error => setState(states.LOADED));
  }, [movieId]);

  switch (state) {
    case states.LOADING:
      return <CenteredSpinner />;

    case states.LOADED:
      return <ReviewsList reviews={reviews.results} />;

    case states.ERROR:
      return <p>Oops, something went wrong. Please try again later.</p>;

    default:
      return null;
  }
};

export default Reviews;