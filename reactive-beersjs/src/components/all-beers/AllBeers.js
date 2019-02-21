import React, { Component } from 'react';
import Header from '../header/Header.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AllBeers.css';



class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
      .then((response) => {
        this.setState({ beers: response.data })
      })
  }

  render() {
    return (

      <div className="AllBeers" style={{ width: '80%', margin: '0 auto' }}>
        <div>
          < Header />
        </div>

        {this.state.beers.map((element, idx) => {
          return (
            <Link to={`/single-beer/${element._id}`}>
              <div className='card flex-row flex-wrap' key={element._id}>
                <div className='card-header border-0'>
                  <img style={{ height: '150px' }} className='image-all' src={element.image_url} alt={element.name} />
                </div>
                <div className='card-block px-2'>
                  <h4 className='card-title'>{element.name}</h4>
                  <p className='card-text'>{element.tagline}</p>
                </div>
              </div>
            </Link>
          )
        })}

      </div>
    );
  }
}

export default AllBeers;
