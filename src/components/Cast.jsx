import { getCast } from 'api/tmdb';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { states } from 'utils/constants';
import CenteredSpinner from './CenteredSpinner';
import CastList from './CastList';
const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [state, setState] = useState(states.LOADING);
  
    useEffect(() => {
      getCast(movieId)
        .then(cast => {
          setCast(cast);
          setState(states.LOADED);
        })
        .catch(error => setState(states.LOADED));
    }, [movieId]);
  
    switch (state) {
      case states.LOADING:
        return <CenteredSpinner />;
  
      case states.LOADED:
        return <CastList cast={cast} />;
  
      case states.ERROR:
        return <p>Oops, something went wrong. Please try again later.</p>;
  
      default:
        return null;
    }
  };
  
  export default Cast;