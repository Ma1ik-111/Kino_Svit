import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../images/left-arrow.svg';

const BackLink = ({ from }) => {
  return (
    <Link to={from}>
      <div className="py-3" style={{ cursor: 'pointer' }}>
        {''}
        <ArrowLeft />
        Go back{''}
      </div>
    </Link>
  );
};

export default BackLink;