import React from 'react';
import Header from '../components/header/Header';
import { NavLink } from 'react-router-dom';

function AllBeers(props){
    //console.log(props)
    return(
      <div>
            <Header/>
            {props.allBeersFromAPI.map((each, i) => {
                return(
                    <div className="card" key={i} style={{justifyContent:"center",padding:"40px 10px",flexDirection: "row",textAlign: "center"}}>
                        <NavLink to={`/beers/${each._id}`}>
                            <img className="card-img-center" src={each.image_url} alt="Card cap" style={{ minWidth: "200px", maxHeight:"200px", objectFit: "contain"}}/>
                            <div className="card-body">
                                <h5 className="card-title">{each.name}</h5>
                                <p className="card-text">{each.tagline}
                                <br/>- Contributed by:{each.contributed_by}</p>
                            </div>
                        </NavLink>
                    </div>
                )
            })}
      </div>  
    )
}

export default AllBeers;