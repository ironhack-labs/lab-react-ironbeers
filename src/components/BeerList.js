import { useState } from 'react';
import { Link } from 'react-router-dom';
//import noBeerImg from '../assets/no-beer.png';

function BeerList(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const beersToDisplay = props.beerArr.filter ( (beerDetails) => {
    return beerDetails.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  return (
    <>
    <input 
    type='text' 
    className='form-control mb-2' 
    name='searchQuery'
    placeholder='Find beer(s)'  
    value={searchQuery} 
    onChange={(e) => { setSearchQuery(e.target.value) }} />
        {props.beerArr === null
          ? 'Loading...'
          : beersToDisplay.map((beerDetails, index) => {
              //console.log(beerDetails);
              return (
                <div key={index}>
                
                <Link to={'/beers/' + beerDetails._id}>
                <div className='card mb-3 text-bg-dark'>
                    <div className='row g-0'>
                        <div className='col-4 text-bg-light text-center card'>
                            {beerDetails.image_url 
                            ? <img className='card-img rounded' src={beerDetails.image_url} alt='' /> 
                            : <img className='card-img rounded' src='../assets/no-beer.jpg' alt='' />}
                        </div>
                        <div className='col-8'>
                            <div className='card-body'>
                                <div className='card-title'><h4>{beerDetails.name}</h4></div>
                                <div className='card-text'><h6>{beerDetails.tagline}</h6></div>
                                <div className='card-text'>Created by: {beerDetails.contributed_by}</div>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                </div>
              )
          })}
      </>
  )
}

export default BeerList;