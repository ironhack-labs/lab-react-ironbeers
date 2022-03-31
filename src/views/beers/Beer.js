/* import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.production.min'; */

const Beer = ({ beer }) => {

    return (
        <>
          <div className="beerContainer">
            <div className="card mb-3 w-100 pt-2" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={beer.image_url}
                    className="img-fluid rounded-start"
                    alt={beer.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <h5 className="card-title fs-1">{beer.name}</h5>
                    <p className="card-text fs-4 text-muted">{beer.tagline}</p>
                    <p className="card-text">
                      <small className="fs-6 fw-bold">Created by: {beer.contributed_by}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
};

export default Beer;