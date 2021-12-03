import React, { Component } from 'react'
import IronbeersService from "../../components/services/Ironbeers.service";
import ListDetails from './ListDetails';


class ListBeers extends Component {
  constructor(props) {
    super(props)

   this.state = {
      beers: []
    }

    this.service = new IronbeersService()
  }

  componentDidMount() {
    this.refreshBeers()
  }

  refreshBeers = () => {
    this.service.getAllBeers()
      .then(response => {
        const beers = response.data

        this.setState({ beers: beers })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
    <div>
        <h1>Beers List</h1>

        {this.state.beers?.map(elm => <div><img src={elm.image_url} alt="imgBeer"/><br></br> {elm.name} <br></br>{elm.tagline} <br></br>{elm.contributed_by}</div>)}
         {/* {this.state.beers?.map(elm => <ListDetails key={elm._id} {elm.image_url} {elm.name} {elm.tagline}{elm.contributed_by}/>)} */}
     </div>
    )

     
    }
    
  
}
export default ListBeers