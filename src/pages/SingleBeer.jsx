import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import BeerDetail from "../components/BeerDetail";

function SingleBeer(props) {

    const { beerId } = useParams();
    console.log(beerId)
    const [beer, setBeer] = useState({})
  

  useEffect(()=>{
    const findBeer = props.beers.find((beer)=>beer._id === beerId)

    if (findBeer){
        setBeer(findBeer)
    }
  },[])

  useEffect(()=>{
    console.log(props)
  },[beer])
 
  return (
      <>
       <Header />
       <BeerDetail beer={beer} />

      </>
  )
}

export default SingleBeer;
