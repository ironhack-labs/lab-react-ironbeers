import React from 'react';
import { StatusContext } from '../context/StatusContext';
import Loading from './Loading';
import Error from './Error';

const ContentLoader = ({ status, error, children }) => {

  const Content = (STATUS) => {
    switch (status) {
      case STATUS.LOADING:
        return <Loading />
      case STATUS.LOADED:
        return <div>{children}</div>
      case STATUS.ERROR:
        return <Error error={error} />
      default:
        return <Error error='Unknown state' />
    }
  }

  return (
    <StatusContext.Consumer>
      {context => Content(context.STATUS)}
    </StatusContext.Consumer>
  )
}

export default ContentLoader;
