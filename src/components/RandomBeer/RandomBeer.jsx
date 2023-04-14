import React, { useEffect, useState } from 'react'
import { getBeerRandom } from '../../services/BeersService';

function RandomBeer() {


  const [beerRandom, setBeerRandom] = useState(undefined)


  useEffect(() => {
    getBeerRandom()
      .then(beers => {
        setBeerRandom(beers)
      })
  }, []);




  return (
    <>
      {beerRandom === undefined ? <div className="p-3">Loading....</div> :
        <div>
          <div className="row g-0 m-3" key={beerRandom._id}>
            <div className="col-md-4">
              <img src={beerRandom.image_url} className="img-fluid rounded-start" alt="beersRandomPicture" style={{ width: 100 }} />
            </div>
            <div className="col-md-8 d-flex align-items-center ">
              <div className="card-body">
                <h1 className="card-title mb-5 mt-5">{beerRandom.name}</h1>
                <h3 className="card-text text-secondary">{beerRandom.tagline}</h3>
                <h3 className="card-text">{beerRandom.first_brewed}</h3>
                <h3 className="card-text text-secondary">{beerRandom.attenuation_level}</h3>
                <p className="card-text text-secondary">{beerRandom.description}</p>
                <p className="card-text"><small className="">{beerRandom.contributed_by}</small></p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default RandomBeer