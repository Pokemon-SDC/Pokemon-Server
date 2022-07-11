/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from './reviews/index.jsx';
import Ratings from './ratings/Ratings.jsx';

function RrBox({ id }) {
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState('');
  const [count, setCount] = useState(10);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', {
      headers: {
        Authorization: process.env.GITKEY,
      },
      params: {
        product_id: id,
        count,
      },
    })
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch((err) => console.log('Error RrBox: ', err));
  }, [id]);

  return (
    <div>
      <h2>Ratings & Reviews</h2>
      <Ratings id={id} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default RrBox;
