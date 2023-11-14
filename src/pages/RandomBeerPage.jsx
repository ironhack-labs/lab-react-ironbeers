import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

    const [beerDetail, setBeerDetail] = useState(null)

    const getBeerDetail = () => { 
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then( response => {
                setBeerDetail(response.data)
            })
            .catch( error => {
                console.log('no beer detail data received...')
                console.log(error)
            })
    }

    useEffect(() => {
        getBeerDetail()
    }, [])

    console.log(beerDetail)

    return (
        <main>
            { !beerDetail
                ? <p>loading...</p>
                : <div key={beerDetail._id} className="beer-detail">
                    <div>
                        <div className="img-wrap"><img src={beerDetail.image_url} alt="" /></div>
                        <div>
                            <h1>{beerDetail.name}</h1>
                            <em>{beerDetail.tagline}</em>
                            <h3>{beerDetail.first_brewed}</h3>
                            <h3>{beerDetail.attenuation_level}</h3>
                            <p>{beerDetail.description}</p>
                            <h4>{beerDetail.contributed_by}</h4>
                        </div>
                    </div>
                 </div>
            }

        </main>
    )

}

export default RandomBeersPage;
