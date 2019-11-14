import React from 'react'

export default function Random(props) {

    let beerArray = props.beers.map((each)=>{
        return each.
    })

    for(let i = 0; i < beerArray.length; i++){

    }


    console.log(props.beers, theBeer)

        return (
            <div className="beerpage">
                <div>
                    <div className="beerpage-beer">
                        <img src={theBeer.image_url} alt="beer" />
                    </div>
                </div>
                <div className="beername-div">
                    <div className="beername-div-info">
                        <h1>{theBeer.name}</h1> <br />
                        <h2>{theBeer.tagline}</h2>
                    </div>
                    <div className="attenuation">
                        <h1 className="grey">
                            {theBeer.attenuation_level}    
                        </h1>
                        <p className="bold">
                            {theBeer.first_brewed}
                        </p>
                    </div>
                </div>
                <div className="beerpage-ps">
                    <div>
                        {theBeer.description}
                    </div>
                    <p className="grey">
                        {theBeer.contributed_by}
                    </p>
                </div>
            </div>
        )
    
}