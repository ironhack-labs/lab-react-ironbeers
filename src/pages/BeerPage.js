import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BeerPage = (props) => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});
  const [load, setLoad] = useState(true);
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div class="card" style={{ margin: 40, width: "40%" }}>
        <div class="card-body">
        <div style={{display:'flex',justifyContent:'center'}} >
          <img
            style={{ width: 80, height: 300 }}
            src={beer[0].image_url}
            alt="imageBeer"
          />
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}} >
            <p style={{fontSize:40}} >{beer[0].name}</p>
            <p style={{fontSize:40,color:'#D3D3D3'}} >{beer[0].attenuation_level}</p>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}} >
            <p style={{fontSize:25,color:'#9C9C9C'}}>{beer[0].tagline}</p>
            <p style={{fontWeight:'bolder',fontSize:20}} >{beer[0].first_brewed}</p>
          </div>
          <div style={{fontWeight:500,fontSize:20}} >{beer[0].description}</div>
          <div style={{color:'#959595',fontWeight:'bolder'}} >{beer[0].contributed_by}</div>
        </div>
      </div>
    </div>
  ) : (
    <div>Load... </div>
  );
};
