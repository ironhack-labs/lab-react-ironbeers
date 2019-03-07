import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="card">
                <div className="card-image"> 
                    <figure className="image is-4by3">
                    <Link to={`/beers`}><img src="https://devinosconcarla.vinopremier.com/wp-content/uploads/2014/08/516x305_beer-glasses-12.jpg" alt="Placeholder image"/></Link>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-12">All Beers</p>
                    
                    </div>
                </div>
                <div>
                    <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. 
                    
                    </div>
                </div>
            </div>

            <div className="card">
                    <div className="card-image"> 
                        <figure className="image is-4by3">
                        <Link to={`/random`}> <img src="http://cervezassilvestres.com/wp-content/uploads/2018/11/Galeria-Cervezas-Silvestres-Vacaloura-copia.jpg" alt="Placeholder image"/></Link>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-12">Random Beer</p>
                        
                        </div>
                    </div>
                    <div>
                        <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
                        
                        </div>
                    </div>
            </div>

            <div className="card">
                    <div className="card-image"> 
                        <figure className="image is-4by3">
                        <Link to={`/new`}><img src="https://www.eladerezo.com/wp-content/uploads/2014/10/la-loca-juana-cerveza-artesana-759x500.jpg" alt="Placeholder image"/></Link>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-12">New Beer</p>
                        
                        </div>
                    </div>
                    <div>
                        <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. 
                        
                        </div>
                    </div>
            </div>


        </div>
    )

}
export default Home;