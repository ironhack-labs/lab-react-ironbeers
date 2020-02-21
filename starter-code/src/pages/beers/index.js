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
    console.log(data)

    this.setState({beers: [...data]})
}

render(){
    return(
        <div style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'

        }}>
           
      {this.state.beers.map((beer,index) => {
          return <Link key={index} to={`/beers/${beer._id}`}> 
            <Card  
            image={beer.image_url}
            title={beer.name}
            description={beer.description}
         />
          </Link>
})}

        </div>
    )
}

}

export default Beers;