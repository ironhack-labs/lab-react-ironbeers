import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetail() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Beer Detail</h1>
      <h2>Beer ID: {id}</h2>
    </div>
  );
}

export default BeerDetail;
