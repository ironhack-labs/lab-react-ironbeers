import React from 'react';
import axios from 'axios';

export default class BeerList  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(response => {
      this.setState({beers: response.data})
    })
  }

  
  render() {
    
    return (
      this.state.beers.map( (beer, index) => {
        return (
        <div className="box" key={index}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={beer.image_url} alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{beer.name}</strong>
                  <br/>
                  <small>{beer.tagline}</small>
                  <br/>
                  <strong>Created by: </strong>{beer.contributed_by}
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item" aria-label="reply">
                    <span className="icon is-small">
                      <i className="fas fa-reply" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a className="level-item" aria-label="retweet">
                    <span className="icon is-small">
                      <i className="fas fa-retweet" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a className="level-item" aria-label="like">
                    <span className="icon is-small">
                      <i className="fas fa-heart" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
        )
      })
    );
  }
}

