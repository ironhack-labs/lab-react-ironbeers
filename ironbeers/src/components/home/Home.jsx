import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {

        return (
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Link to='/all'>
                    <div className='card' style={{ width: '98%', maxWidth: '500px', margin: '10px' }}>
                        <img className='card-img-top' src='https://www.rockandpop.cl/wp-content/uploads/2018/11/cervezas.jpg' alt='Card cap' />
                        <div className='card-body'>
                            <h5 className='card-title'>All Beers</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </Link>

                <Link to='/random'>
                    <div className='card' style={{ width: '98%', maxWidth: '500px', margin: '10px' }}>
                        <img className='card-img-top' src='https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/03/07/noticia-seis-estudios-cientificos-que-demuestran-los-beneficios-de-la-cerveza-para-la-salud.png' alt='Card cap' />
                        <div className='card-body'>
                            <h5 className='card-title'>Random Beer</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card’s content.</p>

                        </div>
                    </div>
                </Link>

                <Link to='/new'>
                    <div className='card' style={{ width: '%', maxWidth: '500px', margin: '10px' }}>
                        <img className='card-img-top' src='https://www.america-retail.com/static//2018/05/7-incerveza.jpg' alt='Card cap' />
                        <div className='card-body'>
                            <h5 className='card-title'>New Beer</h5>
                            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card’s content.</p>

                        </div>
                    </div>
                </Link>

            </div>
        )
    }
}

export default Home;