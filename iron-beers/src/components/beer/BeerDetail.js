import React, {Component} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';
class BeerDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            beer: {}
        }
    }

    componentDidMount(){
        const { params } = this.props.match;
        axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then(responseFromApi => {
          this.setState({
            beer: responseFromApi.data
          })
        })
    
    }
  
  
  render(){
      const {image_url, name, tagline, contributed_by, first_brewed, attenuation_level, description} = this.props;
    return (
        <div class="box w">
        <article class="media">
          <div class="media-left">
            <figure class="image is-32x32">
              <img src={image_url} alt="Image"/>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p >
                <strong className="is-size-4">{name}</strong>
                <br/>
                <span className="has-text-grey-light">{description}</span>
                <br/>
                <span><strong>Create by: </strong>{contributed_by}</span>
              </p>
            </div>
            
          </div>
        </article>
        <Link to='/beers'>Back to beers</Link>
      </div>
    );
  }
}

export default BeerDetail;
