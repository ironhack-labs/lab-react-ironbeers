import { Link, useParams } from 'react-router-dom';

function BeerDetails(props) {
    const {beerId} = useParams(); // check if it's returning a string!
    const details = props.beerArr.find(beerDetails => {
        return beerDetails._id == beerId;
    });

    const renderDetails = () => {
        return (
          <>
            <div className='card col m-auto mt-3 mb-3 text-bg-light ms-1 me-1' key={details._id}>
              <h3 className='card-header text-center'>{details.name}</h3>
              {details.image_url
               ? 
               (<img className='beer-details card-img rounded p-3' src={details.image_url} alt='' />)
               : 
               (<img className='beer-details card-img rounded p-3' src='../assets/no-beer.jpg' alt='' />)
              }
              <div className='card-body text-bg-dark'>
                <div className='card-text'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item bg-warning rounded text-center'><em>{details.tagline}</em></li>
                  </ul>
                </div>
                <div className='card-text mt-3 mb-4'>{details.description}</div>
                <div className='card-text row text-bg-light rounded m-3'>
                  <div className='col-8'>First brewed: {details.first_brewed}</div>
                  <div className='col-4 text-end m-auto'>{details.attenuation_level}</div>
                </div>
              </div>
              <div className='card-footer text-muted text-center'>
                {details.contributed_by}
              </div>
            </div>
            <div className='text-center p-2'>
              <Link className='btn btn-warning text-dark' to='/beers'>
                Back
              </Link>
            </div>
          </>
        );
    }

    return (
        <div className='cards'>
            {details && renderDetails()}
        </div>
      )
}

export default BeerDetails;