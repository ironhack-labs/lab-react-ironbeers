import React from 'react';
import Navbar from '../Navbar';
import { Link} from 'react-router-dom';

const AllBeers = (props) => {
  const clickHandler = (beer) => {
    props.onDetailClick(beer);
  };
 
  if (props.beerData.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="flexwrapper">
          <div className="lds-roller asd">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="flexcontainer">
        {props.beerData.map((beer) => {
          return (
            <div key={beer._id}>
              <div className="singlebeer">
                <div id="imgId">
                  <img className="singlebeer-img" src={beer.image_url} alt="" />
                </div>
                <div id="beerdescription">
                  <h3>{beer.name}</h3>
                  <h5>{beer.tagline}</h5>
                  <p>created by: {beer.contributed_by}</p>
                  <Link
                    onClick={() => {
                      clickHandler(beer);
                    }}
                    to={`/beerDetails/${beer._id}`}
                  >
                    See Details
                  </Link>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBeers;
