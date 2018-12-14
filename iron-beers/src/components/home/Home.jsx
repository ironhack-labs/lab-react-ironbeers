import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
  
 
  render() {
 
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Link to='/beers'>
          <div className='card' style={{ width: '18rem' }}>
            <img className='card-img-top' src='https://www.rockandpop.cl/wp-content/uploads/2018/11/cervezas.jpg' alt='Card cap' />
            <div className='card-body'>
              <h5 className='card-title'>All beers</h5>
            </div>
          </div>
          </Link>

        <Link to='/random-beer'>
          <div className='card' style={{ width: '18rem' }}>
            <img className='card-img-top' src='https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/03/07/noticia-seis-estudios-cientificos-que-demuestran-los-beneficios-de-la-cerveza-para-la-salud.png' alt='Card cap' />
            <div className='card-body'>
              <h5 className='card-title'>Random Beer</h5>
            </div>
          </div>
          </Link>

        <Link to='/new-beer'>
          <div className='card' style={{ width: '18rem' }}>
            <img className='card-img-top' src='https://www.america-retail.com/static//2018/05/7-incerveza.jpg' alt='Card cap' />
            <div className='card-body'>
              <h5 className='card-title'>New beer</h5>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}



export default Home;