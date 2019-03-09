import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ListBeer extends Component{
  constructor(props){
    super(props);
    this.state ={
      allBeers: []
    }
  }

  componentWillMount(){
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
      .then(res => {
        this.setState({
          allBeers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render(){
    if(this.state.allBeers.length === 0){
      return (
        <div>
          <header className='text-center bg-info'>
            <Link to='/'>
              <i className="fas fa-igloo fa-2x text-white"></i>
            </Link>
          </header>
          <h1>Loading...</h1>
        </div>
      ); 
    } else{
      return (
        <div>
          <header className='text-center bg-info'>
            <Link to='/'>
              <i className="fas fa-igloo fa-2x text-white"></i>
            </Link>
          </header>
          <div className="container-fluid">
            <div className='row'>
              {this.state.allBeers.map((beer, index) => {
                return (
                  <div className='col-12 col-md-4' key={index}>
                    <Link to={`/all/${beer._id}`}>
                      <div className="list-beer card">
                        <div className='list-img' style={{ backgroundImage: `url(${beer.image_url})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                        <div className="card-body">
                          <h5 className="card-title">{beer.name}</h5>
                          <p className="card-text">
                            {beer.tagline}
                          </p>
                          <p className="card-text">
                            Created by: {beer.contributed_by}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>    
      );
    }
  }
}

export default ListBeer;