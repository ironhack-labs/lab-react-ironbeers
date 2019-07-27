import React from 'react';

export default function Beers(props) {

    if(props.ready){

        let allBeers = props.beers.map((eachBeer)=>{
            return (
                <div key={eachBeer._id}>
                    <img src={eachBeer.image_url} />
                    <h2>{eachBeer.name}</h2>
                    <p>{eachBeer.brewers_tips}</p>
                    <p>{eachBeer.description}</p>
                </div>
            )
        });

        return (
            <div>
                {allBeers}
            </div>
        )
        
    }else{
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )

    }
}
