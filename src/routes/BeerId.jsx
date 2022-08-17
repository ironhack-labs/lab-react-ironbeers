import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navBar";

export default function BeerId() {
  const params = useParams();
  console.log(params);

  const [beerId, setBeerId] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        setBeerId(() => response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [params.id]); // qué significa esto?

  return loading ? (
    <p>Me estoy cargando. dame un momento</p>
  ) : (
    <div style={{display:"flex", flexDirection:"column",alignItems: "center"}}>
    
    <NavBar/>

      {" "}
      <img
        src={beerId.image_url}
        style={{ width: "100px", height: "auto" }}
        alt="beerId"
      />

      <div style={{
        display:"flex",
      justifyContent:"center",
      alignItems: "center"}}>
        <h3>{beerId.name}</h3>
        <p>{beerId.attenuation_level}</p>
        </div>

<div style={{
 display:"flex",
justifyContent:"center",
      alignItems: "center"}}>
      <h5>{beerId.tagline}</h5>
      <p>{beerId.first_brewed}</p>
</div>

      <p>{beerId.description}</p>

      <p>
        <b>Created by:</b> {beerId.contributed_by}
      </p>

    </div>
  );
}

