import { getMovieBySearch } from 'api/tmdb';
import CenteredSpinner from 'components/CenteredSpinner';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { states } from 'utils/constants';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState(states.LOADED);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setState(states.LOADED);
      return;
    }

    setState(states.LOADING);

    getMovieBySearch(query)
      .then(data => {
        if (data.length) {
          setMovies(data);
          setState(states.LOADED);
        } else {
          setState(states.NO_RESULTS);
        }
      })
      .catch(error => {
        setState(states.ERROR);
      });
  }, [query]);

  const handleSearchFormSubmit = searchQuery => {
    if (!searchQuery) {
      setSearchParams({});
      return;
    }
    if (query !== searchQuery) {
      setMovies([]);
      setSearchParams({ query: searchQuery });
    }
  };

  switch (state) {
    case states.LOADING:
      return <CenteredSpinner />;

    case states.LOADED:
      return (
        <>
          <SearchForm formSubmit={handleSearchFormSubmit} query={query ?? ''} />
          <MoviesList movies={movies} />
        </>
      );

    case states.ERROR:
      return <p>Oops, something went wrong. Please try again later.</p>;

    case states.NO_RESULTS:
      return <p>No matching movies found</p>;

    default:
      return null;
  }
};

export default Movies;
