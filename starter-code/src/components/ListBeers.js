import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class ListBeers extends Component {
  constructor(props) {
    super(props);

    this.state={
      searchBeer: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      searchBeer: value,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <input type="text" placeholder="Search for a beer" onChange={this.handleChange} value={this.state.searchBeer}/>
        {
          this.props.allBeers.length > 0 && this.props.allBeers.filter(Beer => Beer.name.toLowerCase().includes(this.state.searchBeer.toLowerCase())).map((eachBeer, idx) => {
            return (
              <div key={idx} className="all-beers">
              <Link to={`/beers/${eachBeer._id}`} className='home-links'>
                <div className="beer-box">
                  <img src={eachBeer.image_url} alt="beer info"/>
                  <div className="each-beer">
                    <h3 className='home-links beer-name'>{eachBeer.name}</h3>
                    <p className='home-links tagline'>{eachBeer.tagline}</p>
                    <p className='home-links contributor'><b>Created by: </b>{eachBeer.contributed_by}</p>
                  </div>
                </div>
              </Link>
              <hr></hr>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ListBeers;
