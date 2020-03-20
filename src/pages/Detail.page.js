import React, { useState, useEffect } from "react";

import { getBeer } from "../../lib/beer.api";
import { Loading } from "../components/Loading";
import { Item } from "../components/Item";

export const DetailPage = ({ id }) => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBeer(id)
      .then(detail => setDetail(detail))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Item item={detail} />
    </>
  );
};
