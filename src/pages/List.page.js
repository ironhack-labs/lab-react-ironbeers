import React from "react";

import { getBeers } from "../../lib/beer.api";

export const ListPage = () => {
  const list = getBeers();
  console.log(list);
  return <p>LIST</p>;
};
