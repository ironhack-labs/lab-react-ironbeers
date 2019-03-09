import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class SingleBeer extends Component{
  constructor(props){
    super(props);
    this.state = {
      beer: ''
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id;
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          beer: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render(){
    if(this.state.beer === ''){
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
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 col-md-4'>
                <div className='list-img mt-4' style={{ backgroundImage: `url(${this.state.beer.image_url})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                <div className='mt-4 mx-2'><h3 className='d-inline mb-0'>{this.state.beer.name}</h3><h4 className='float-right text-muted mb-0'>{this.state.beer.attenuation_level}</h4></div>
                <div className='mt-1 mx-2'><p className='d-inline text-muted'>{this.state.beer.tagline}</p><small className='float-right'>{this.state.beer.first_brewed}</small></div>
                <div className='mt-1 mx-2'><p>{this.state.beer.description}</p></div>
                <div className='mt-1 mx-2'><small className='text-muted'>{this.state.beer.contributed_by}</small></div>`
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SingleBeer;