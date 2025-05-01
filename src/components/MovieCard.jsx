import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image, Nav, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { generateImageUrl } from 'api/tmdb';

import defaulImage from '../images/not-found-img.jpg';