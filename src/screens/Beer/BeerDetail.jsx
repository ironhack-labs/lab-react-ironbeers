import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeerDetailItem } from "../../components/Beers/BeerDetailItem";
import { Navbar } from "../../components/misc/Navbar/Navbar";
import { getBeerDetail } from "../../services/BeersService";

export const BeerDetail = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    getBeerDetail(beerId)
      .then((beer) => {
        setBeer(beer);
      })
      .catch((err) => console.error(err));
  }, [beerId]);
  return (
    <div>
      <Navbar />
      <BeerDetailItem {...beer} />
    </div>
  );
};
