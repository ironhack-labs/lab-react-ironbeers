import React from 'react';
import Loading from './Loading';
import Error from './Error';

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

const ContentLoader = ({ status, error, children }) => {
  switch (status) {
    case STATUS.LOADING:
      return <Loading />
    case STATUS.LOADED:
      return <div>{children}</div>
    case STATUS.ERROR:
      return <Error error={error} />
    default:
      return <Error error='App is in unknown state' />
  }
}

export default ContentLoader;
