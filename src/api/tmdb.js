import axios from 'axios';
import {
  INIT_FETCH_CONFIG,
  DEFAULT_QUERY_PARAMS_FOR_SEARCH,
} from 'utils/constants';

const tmdb = axios.create(INIT_FETCH_CONFIG);
let apiConfigDetails = null;

async function getApiConfigDetails() {
  const url = '/configuration';
  try {
    const response = await tmdb(url);
    apiConfigDetails = response.data;
    return response.data;
  } catch (error) {
    console.error(`Error in getting of API configuration:${error}`);
  }
}

getApiConfigDetails();