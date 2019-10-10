import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from './Header';
import SearchBar from './SearchBar'

export default class  Beers extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  showBeers = () => {
    return this.props.beers.map((beer) => {
      return(
        <div key={beer._id}>
          <div  style={{display:'flex', justifyContent:'center'}}className="list-group-item list-group-item-action">
          <div>
          <img  style={{objectFit: 'scale-down', width:'200px', height:'200px'}} src={beer.image_url} alt=""/>
          </div>
          <div style={{width:'20%', marginTop:'40px'}}>
          <h4><Link to={`/beers/${beer._id}`}>{beer.name}</Link> </h4>
          <p className="lead">{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
          </div>
          </div>  
        </div>
      )
    })
  }

  render(){
      return (
            <div>
              <Header />
              <SearchBar 

              search={this.props.search}
              value={this.props.searchTerm}
              />
                {this.props.ready &&
                                    <div>
                                      {this.showBeers()}
                                    </div>
              }
              {!this.props.ready &&
                                    <div>
                                      Loading...
                                    </div>
              }
          </div>
      )
  }
  
}