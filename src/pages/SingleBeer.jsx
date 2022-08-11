import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import {getSingleBeer} from '../services/calls'

const SingleBeer = () => {
  const [SingleBeer, setSingleBeer] = useState({})
  const { id } = useParams();
  useEffect(() => {
    singlebeer(id)
  },[id])

  const singlebeer = async(id) => {
    const aSingleBeer = await getSingleBeer(id)
    setSingleBeer(aSingleBeer)
  }

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = SingleBeer;
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <img src={image_url} width="125" alt={name} />
        <h1>
          {name} <span> {attenuation_level} </span>
        </h1>
        <p>
          {tagline} <span> {first_brewed} </span>
        </p>
        <p> {description} </p>
        <p> {contributed_by} </p>
        <Link to="/beers"> Back to all beers </Link>
      </div>
    </div>
  );
};

export default SingleBeer;
