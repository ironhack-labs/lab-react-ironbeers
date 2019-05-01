import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Beer extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
  
  
  render(){
      const {image_url, name, tagline, contributed_by, detail} = this.props;
    return (
        <div className="box w">
        <article className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img src={image_url} alt="Beer"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
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
