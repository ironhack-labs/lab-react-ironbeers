import React from "react";

import { FromCreate } from "../components/FormCreate";
import { withRouter } from "react-router-dom";

import { createBeer } from "../../lib/beer.api";

export const CreatePage = withRouter(({ history }) => {
  const handleSumbit = async data => {
    const res = await createBeer(data);
    if (res.status === 200) history.push("/");
    else console.log(res.data.message);
  };

  return <FromCreate setSubmit={data => handleSumbit(data)} />;
});
