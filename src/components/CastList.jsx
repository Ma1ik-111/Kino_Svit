import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import CastCard from './CastCard';

const CastList = ({ cast }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
      {cast.map(({ id, ...castDetails }) => (
        <Col key={id}>
          <CastCard {...castDetails} />
        </Col>
      ))}
    </Row>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default CastList;