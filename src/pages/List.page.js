import React from "react";

import { getBeers } from "../../lib/beer.api";

export const ListPage = () => {
  getBeers().then(e => {
    console.log(e);
    return null;
  });
  return <p>LIST</p>;
};
