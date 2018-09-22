import React from 'react';
import Spinner from './Spinner';

const LoadingDimmer = ({ show }) => show ? (
  <div>
    <Spinner active={true} />
    <div className='dimmer' />
  </div>
) : null;

export default LoadingDimmer;
