import React from 'react';
import Header from './Header.js';
import axios from 'axios'


class RandomBeer extends React.Component  {

    state = {
        randomBeer: null
      }

    componentDidMount () {
axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((response) => {
    console.log(response.data)
    this.setState({
        randomBeer: response.data
      })
})
      }


render () {
    return (
        <div>
     <Header></Header>
    <h1>Random Beer</h1>

    <div>
{this.state.randomBeer 
? <div>
<img src={this.state.randomBeer.image_url} width="75px"></img>


<h2>{this.state.randomBeer.name}</h2>
<p>{this.state.randomBeer.tagline}</p>
<p>{this.state.randomBeer.attenuation_level}</p>
<p>{this.state.randomBeer.first_brewed}</p>

<p>{this.state.randomBeer.description}</p>

<p>{this.state.randomBeer.contributed_by}</p>


</div> 

: "Loading..."
}

</div>
    </div>
    )


}    
}
    
export default RandomBeer