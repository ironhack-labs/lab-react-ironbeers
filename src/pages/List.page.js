import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { ItemList } from "../components/ItemList";

import { getBeers } from "../../lib/beer.api";
import { Loading } from "../components/Loading";

export const ListPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBeers()
      .then(list => setList(list))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="list-group">
        {list.map(e => (
          <Link
            key={e._id}
            to={`/detail/${e._id}`}
            className="list-group-item list-group-item-action"
          >
            <ItemList>{e}</ItemList>
          </Link>
        ))}
      </div>
    </>
  );
};
