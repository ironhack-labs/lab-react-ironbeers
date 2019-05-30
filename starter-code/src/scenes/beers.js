import React, {Component, Fragment} from 'react'
import BeersService from '../services/BeersService'
import Navbar from '../components/navbar'
import {ListBox} from 'primereact/listbox'
import Row from '../components/Row'
class Beers extends Component {
  state = {
    beers : [
      {
        image_url: "https://images.punkapi.com/v2/2.png",
        _id: "5ccc1e2caea376c9272c5a76",
        id: 2,
        name: "Trashy Blonde"
      }
    ], 
    beer: ''
  }
  componentDidMount = () => {
    BeersService.getAllBeers()
      .then(
        beers => this.setState({beers}), 
        error => console.error(error)
      )
  }

  render(){
    return (
      <Fragment >
        <Navbar />
        <ListBox
					value={this.state.beer}
					filter={true}
					options={this.state.beers}
					onChange={e => this.setState({ beer: e.value })}
					itemTemplate={Row}
					style={{ width: '100vw'}}
					listStyle={{ maxHeight: '100vh' }}
				/>
      </Fragment>
    )
  }
}

export default Beers