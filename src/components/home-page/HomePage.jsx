import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (

        <div className="container mt-5 row justify-content-md-center">



            <div className="card" style={{ width: 180 }}>
                <img src="../images/beers.png" className="card-img-top" alt="..." />
                <div className="card-body">

                    <Link to={'/beers'}>
                        <h5 className="card-title">All Biers</h5>
                    </Link>

                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>

            </div>

            <div className="card ms-5" style={{ width: 180 }}>
                <img src="../images/random-beer.png" className="card-img-top" alt="..." />
                <div className="card-body">

                    <Link to={'/random-beer'}>
                        <h5 className="card-title">Random Beer</h5>
                    </Link>

                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>

            <div className="card ms-5" style={{ width: 180 }}>
                <img src="../images/new-beer.png" className="card-img-top" alt="..." />
                <div className="card-body">

                    <Link to={'/new-beer'}>
                        <h5 className="card-title">New Beer</h5>
                    </Link>

                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                </div>
            </div>
            


        </div>


    )
}

export default HomePage
