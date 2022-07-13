/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import ReviewsRatings from './ReviewsRatings.jsx';
import ReviewsDate from './ReviewsDate.jsx';
import ReviewsUser from './ReviewsUser.jsx';
import ReviewsRecommend from './ReviewsRecommend.jsx';
import ReviewsResponse from './ReviewsResponse.jsx';
import ReviewsBody from './ReviewsBody.jsx';
import ReviewsHelpful from './ReviewsHelpful.jsx';

function Reviews({ reviews }) {
  console.log('class: ', reviews);

  return (
    <div style={flexContainer}>
      {reviews.map((review) => {
        const revSumm = review.summary;
        return (
          <div key={review.review_id} style={flexItems}>
            <div style={{ display: 'flex' }}>
              <ReviewsRatings rating={review.rating} />
              <ReviewsUser user={review.reviewer_name} />
              <ReviewsDate date={review.date} />
            </div>
            <br />
            {revSumm.length > 60 ? (
              <div style={summaryContainer}>
                {`${revSumm.slice(0, 61)}...`}
                <div style={bodyContainer}>
                  {`...${revSumm.slice(61)}`}
                  <br />
                </div>
              </div>
            ) : (
              <div style={summaryContainer}>
                {revSumm}
              </div>
            )}
            <div>
              <br />
              <ReviewsBody reviewBody={review.body} reviewImages={review.photos} />
              <br />
            </div>
            <ReviewsRecommend recommend={review.recommend} />
            <ReviewsResponse responseBody={review.response} />
            <br />
            <ReviewsHelpful helpfulness={review.helpfulness} reviewId={review.review_id} />
          </div>
        );
      })}
    </div>
  );
}

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  alignItems: 'center',
};

const flexItems = {
  width: '600px',
};

const summaryContainer = {
  fontWeight: 'bold',
  fontSize: 20,
};

const bodyContainer = {
  fontWeight: 'normal',
};

export default Reviews;