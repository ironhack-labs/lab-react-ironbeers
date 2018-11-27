import React, {Component} from 'react';
import axios from 'axios';
import Header from '../Header/Header';

class BeerDetail extends Component {

  constructor(){
    super();
    this.state = {
      beer:{}
    }
  }

  componentWillMount(){
    const base_url = 'https://ironbeer-api.herokuapp.com/beers'

    axios.get(`${base_url}/single/${this.props.match.params.id}`)
      .then(res =>{
        this.setState({beer: res.data})
        //console.log('State =====>', this.state.beer)
      })
      .catch(err => {
        console.log('Error =====>', err)
      });
  }


  render(){
    const {beer} = this.state;
    return(
      <section>
        <Header />
        <div className='beer-details'>
          <div className='beer-img-envelop'>
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div>
            <p className='beer-detail-first-line'>
              <span className='beer-name'>{beer.name}</span>
              <span className='beer-attenuation'>{beer.attenuation_level}</span>
            </p>
          </div>
          <div>
            <p className='beer-detail-second-line'>
              <span className='beer-tagline'>{beer.tagline}</span>
              <span className='beer-first-brewed'>{beer.first_brewed}</span>
            </p>
          </div>
          <p className='beer-description'>{beer.description}</p>
          <p className='beer-contributor'>{beer.contributed_by}</p>
        </div>
      </section>
    )
  }
}

export default BeerDetail;