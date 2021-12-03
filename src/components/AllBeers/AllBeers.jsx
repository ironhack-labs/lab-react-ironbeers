import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const AllBeers = (props) => {
  const { beers } = props
  return (
    <div className="col" style={{ maxHeight: '90vh'}}>
        <Navbar />
        <div className="list-group">
            {beers.map(beer => {
                return (
                    <Link key={beer._id} className="list-group-item list-group-item-action" to={`/beers/${beer._id}`}>
                        <div className="row flex d-flex align-items-center" >
                            <div className="col-2 col-lg-6">
                                <img className="img-fluid" src={beer.image_url} alt={beer.name} />
                            </div>
                            <div className="col-8 col-lg-6">
                                <p className="h2">{beer.name}</p>
                                <p className="h4 text-secondary">{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
  );
};

export default AllBeers;