// dependencies
import React from 'react';

// local modules
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
