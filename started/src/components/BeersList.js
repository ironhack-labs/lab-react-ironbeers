import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/misc/Header';

// import { beersList } from '../services/BeersServices';

export default class BeersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          beers: [],
          search: ''
        };
    }

    componentDidMount() {
        fetch("https://ironbeer-api.herokuapp.com/beers/all")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                beers: result
              });
            //   console.log(result)
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
        )
    }
   

    onSearch (e) {
      const search = e.target.value;
      console.log(search)
      if (search){
        fetch(`https://ironbeer-api.herokuapp.com/beers/search?q=${search}`)
          .then(res => res.json())
          .then(
            (data) => {
                 console.log(data)
              this.setState({
                isLoaded: true,
                beers: data
              });
            
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
        )
      } else {
        this.componentDidMount();
      }

  } 

    render () {
      
        const { error, isLoaded, beers } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
              <div className="container">
                <Header/>
                <div className="panel-block">
                    <p className="control has-icons-left">
                      <input className="input " type="text" placeholder="search" name="search"  onChange={this.onSearch}/>
                      <span className="icon is-small is-left">
                        <i className="fas fa-search" aria-hidden="true"></i>
                      </span>
                    </p>
                </div>
                {beers.map((beer,index) => (
                  
                        <div key={index} className="box">
                            <article className="media">
                                <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={beer.image_url} alt="Beer"/>
                                </figure>
                                </div>
                                <div className="media-content">
                                <div className="content">
                                    <Link to={`/single/${beer._id}`}>
                                    <h1>{beer.name}</h1>
                                    </Link>
                                    <br/>
                                    <p>{beer.tagline}</p>
                                    
                                    <small>{beer.contributed_by}</small>
                                
                                </div>
                            
                                </div>
                            </article>
                        </div>
                    )
                )}

            </div>
          )
        }
      
    }
}
