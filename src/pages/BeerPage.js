import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BeerPage = (props) => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});
  const [load,setLoad] = useState(true);
  const getBeerProfile = () => {
    let beerProfile = props.beers.filter((beerProfile) => {
      return beerProfile._id === id;
    });
    setBeer(beerProfile);
    setLoad(false);
  };
  useEffect(() => {
    getBeerProfile();
  }, []);
  return !load ? (
    <div style={{ marginTop: 40 }}>
    <div><img src={beer[0].image_url} alt=""/></div>
      <div>{beer[0].name}</div>
      <div>{beer[0].tagline}</div>
      <div>{beer[0].first_brewed}</div>
      <div>{beer[0].attenuation_level}</div>
      <div>{beer[0].description}</div>
      <div>{beer[0].contributed_by}</div>
    </div>
  ) : (
    <div>Load... </div>
  );
};
