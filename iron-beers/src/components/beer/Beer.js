import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Beer extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
  
  
  render(){
      const {beers} = this.state;
      const {image_url, name, tagline, contributed_by, detail} = this.props;
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
                <strong className="is-size-4"><Link to={detail}>{name}</Link></strong>
                <br/>
                <span className="has-text-grey-light">{tagline}</span>
                <br/>
                <span><strong>Create by: </strong>{contributed_by}</span>
              </p>
            </div>
            
          </div>
        </article>
      </div>
    );
  }
}

export default Beer;
