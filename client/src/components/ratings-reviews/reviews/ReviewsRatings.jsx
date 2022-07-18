/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import StarRatings from 'react-star-ratings';

function ReviewsRatings({ rating }) {
  const starRating = Math.round(rating * 4) / 4;

  return (
    <div>
      <StarRatings rating={starRating} starDimension="18px" starSpacing="2px" starRatedColor="gold" />
    </div>
  );
}

export default ReviewsRatings;
