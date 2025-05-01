import { getCast } from 'api/tmdb';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { states } from 'utils/constants';
import CenteredSpinner from './CenteredSpinner';
import CastList from './CastList';