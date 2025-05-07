import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import ReviewsItem from './ReviewsItem';

const ReviewsList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <div>No reviews available</div>;
  }

  return (
    <Row xs={1} className="g-4">
      {reviews.map(({ id, ...reviewDetails }) => (
        <Col key={id}>
          <ReviewsItem {...reviewDetails} />
        </Col>
      ))}
    </Row>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewsList;