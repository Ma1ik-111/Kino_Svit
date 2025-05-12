const BASE_URL = 'https://api.themoviedb.org/3';

export const INIT_FETCH_CONFIG = {
  method: 'GET',
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGFhNzY1ZjlhMzVhOTdiNTBiZjI5NmNkZGIzZTBhNyIsInN1YiI6IjY0NTE4NGUwMzNhZDhmMDBmZWYyN2FhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryw4dh3H0xPOea1Y2cbKZvI8bFHdhr2M3oPtuPEBQes',
  },
};

export const DEFAULT_QUERY_PARAMS_FOR_SEARCH = {
  include_adult: false,
  language: 'en-US',
  page: 1,
};

export const states = {
  NO_RESULTS: 'NO_RESULTS',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

export const dateFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
