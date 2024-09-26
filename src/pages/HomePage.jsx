import imgAllBeers from '../assets/beers.png';
import imgRandomBeer from '../assets/random-beer.png';
import imgNewBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';




function HomePage() {
    return (
        <div className='container d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <div className='row'>
                <div className='col-md-4 text-center'>
                    <img src={imgAllBeers} alt="" className="img-fluid mx-auto mb-3" />
                    <Link to={'/beers'} className='nav-link'>
                        <h5 className='text-decoration-none '>All Beers</h5>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptates incidunt dignissimos itaque quis quibusdam optio odit repellendus. Eligendi laborum velit corporis asperiores error sint facere eius fugit maxime! Quo? Modi, vel sapiente maxime fuga cum nesciunt voluptatem veniam doloremque minus laboriosam repellendus? Ipsam accusamus quaerat nisi, aliquam nam voluptatum dignissimos! Veniam, officia consequuntur. Impedit ab aut minima maxime a!</p>
                </div>
                <div className='col-md-4 text-center'>
                    <img src={imgRandomBeer} alt="" className="img-fluid mx-auto mb-3" />
                    <Link to={'/random-beer'} className='nav-link'>
                        <h5 className='text-decoration-none '>Random beer</h5>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptates incidunt dignissimos itaque quis quibusdam optio odit repellendus. Eligendi laborum velit corporis asperiores error sint facere eius fugit maxime! Quo? Modi, vel sapiente maxime fuga cum nesciunt voluptatem veniam doloremque minus laboriosam repellendus? Ipsam accusamus quaerat nisi, aliquam nam voluptatum dignissimos! Veniam, officia consequuntur. Impedit ab aut minima maxime a!</p>
                </div>
                <div className='col-md-4 text-center'>
                    <img src={imgNewBeer} alt="" className="img-fluid mx-auto mb-3" />
                    <Link to={'/new-beer'} className='nav-link'>
                        <h5 className='text-decoration-none '>New beer</h5>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptates incidunt dignissimos itaque quis quibusdam optio odit repellendus. Eligendi laborum velit corporis asperiores error sint facere eius fugit maxime! Quo? Modi, vel sapiente maxime fuga cum nesciunt voluptatem veniam doloremque minus laboriosam repellendus? Ipsam accusamus quaerat nisi, aliquam nam voluptatum dignissimos! Veniam, officia consequuntur. Impedit ab aut minima maxime a!</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;




