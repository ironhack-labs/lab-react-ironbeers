import React, {Component} from 'react'
import Card from '../../components/Card'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Beers extends Component {
    state = {
        beers: []
    }

async componentDidMount() {
    const {data} = await axios.get('https://ih-beers-api2.herokuapp.com/beers')

    this.setState({beers: [...data.results]})
}

render(){
    return(
        <div style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'

        }}>
           
      {this.state.beers.map(beer => (
          <Card key={beer.id}>
         <img src={beer.image_url} alt={beer.name} />
      <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
      <p>{beer.tagline}</p>
      <p>{beer.contributed_by}</p>
          </Card>
      ))}

        </div>
    )
}

}

export default Beers;