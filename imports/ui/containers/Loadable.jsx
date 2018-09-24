import React from 'react';
import { connect } from 'react-redux';
import LoadingDimmer from '../components/LoadingDimmer';

const makeMapStateToProps = (loadingProp) =>
  (state) =>
    ({ loading: state[loadingProp] });

const Loadable = ({ render, loading, ...other }) =>
  <>
    <LoadingDimmer show={loading} />
    {render(other)}
  </>;

export default (loadingProp) =>
  connect(makeMapStateToProps(loadingProp))(Loadable);
