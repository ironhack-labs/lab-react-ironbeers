import React from 'react';
import Link from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


function ListBeers(props) {
    
    // console.log(props.beers)
    
    return (
        <div>
            <Link>
            <input type="text" placeholder="search" onChange={props.onSearch}></input>
            <div >
                {props.beers.map((beer) => {
                    return (
                        <div key={beer._id}>
                            <img style={{height: "300px"}} src={beer.image_url} alt="beer"></img>
                            <div>
                                <p>{beer.name}</p>
                                <p>{beer.tagline}</p>
                                {/*<Link to={`/beers/${beer._id}`}>Read more</Link>*/}
                        </div>
                    </div>
                    )
                })}
            
            </div>


        </div>


    )
}


export default ListBeers