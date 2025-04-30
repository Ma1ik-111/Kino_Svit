import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { generateImageUrl } from 'api/tmdb';
import notFoundImg from '../images/not-found-img.jpg';

const CastCard = ({ name, profile_path, character }) => {
  const profileUrl = profile_path
    ? generateImageUrl(profile_path, 'h632')
    : notFoundImg;

  return (
    <Card>
      <Card.Img variant="top" src={profileUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Character:{' ' + character}</Card.Text>
      </Card.Body>
    </Card>
  );
};

CastCard.propTypes = {
  name: PropTypes.string,
  profile_path: PropTypes.string,
  character: PropTypes.string,
};

export default CastCard;