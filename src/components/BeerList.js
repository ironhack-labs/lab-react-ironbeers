import { Link } from 'react-router-dom';
//import noBeerImg from '../assets/no-beer.png';

function BeerList(props) {
  return (
    <>
        {props.beerArr === null
          ? 'Loading...'
          : props.beerArr.map((beerDetails, index) => {
              //console.log(beerDetails);
              return (
                <>
                <Link to={'/beers/' + beerDetails._id} key={index}>
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
                </>
              )
          })}
      </>
  )
}

export default BeerList;