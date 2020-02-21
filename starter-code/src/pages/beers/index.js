import React, {Component} from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Beers extends Component {
    state = {
        beers: []
    }

async componentDidMount() {
    const {data} = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
    //console.log(data)

    this.setState({beers: [...data]})
}

render(){
    return(
       <>
         <Header />  
      {this.state.beers.map((beer,index) => {
          return <Link key={index} to={`/beers/${beer._id}`}> 
            <Card  
            image={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            contributed_by={beer.contributed_by}
         />
          </Link>
})}
        </>
    )
}

}

export default Beers;