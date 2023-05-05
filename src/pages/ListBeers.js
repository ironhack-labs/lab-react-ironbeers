import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import Beer from "../components/Beer";
import { useEffect, useState } from "react";



function ListBeers(props) {
    const [beers,setBeers]=useState()

    useEffect(()=>{
        setBeers(props.beers)
    },[props.beers])


  if (!beers) {
    return <h1>Loading.......</h1>;
  } else {
    return (
      <div>
        <Header />
        <Navbar />

        {beers.map((beer) => {
          return (
            <NavLink key={beer._id} className="nav-link" to={`/beers/${beer._id}`}>
                
            <Beer beer={beer}></Beer>

            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;
