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
          <Link to={`/beers/${beer._id}`}>{beer.name}</Link>  
        </div>
      )
    })
  }

  render(){
      return (
            <div>
              <Header />
              <SearchBar search={this.props.search}/>
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