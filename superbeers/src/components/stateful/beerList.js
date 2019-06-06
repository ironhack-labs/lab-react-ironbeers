import React, {Component} from "react"
import NavBar from '../stateless/navBar'
import BeerCard from '../stateless/beerCard'
import BeerServices from '../../services/beerServices'


export default class BeerList extends Component {
  constructor(props){
    super(props)
    this.state = {
      beers: []
    }
    this.services = new BeerServices()
  }

  componentDidMount() {
    this.services.getAllBeer()
      .then(beers => this.setState({beers}))
  }

  render() {

    return(
      <div className="beerList">
        <NavBar/>
          <div className="container">
            <div className="row">
              {this.state.beers.map( elm => {
              
                return(
                  
                  <BeerCard className="col-12 col-sm-6 col-md-4 " key={elm._id} beer={elm} />
                )
              })}
            </div>
        </div>
      </div>
    )

  }
}