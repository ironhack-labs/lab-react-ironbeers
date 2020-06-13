import React from 'react';
import Header from './Header.js';
import axios from 'axios'


class BeerDetail extends React.Component {

    state = {
        oneBeer: null
      }
   componentDidMount(){
      axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params._id).then((response) => {
        console.log(response.data)
        this.setState({
            oneBeer: response.data
          })
      }) 
   }   


render() {
    return (
        <div>
  <Header></Header>
    <h1>BeerDetail</h1>
<div>
{this.state.oneBeer 
? <div>
<img src={this.state.oneBeer.image_url} width="75px"></img>


<h2>{this.state.oneBeer.name}</h2>
<p>{this.state.oneBeer.tagline}</p>
<p>{this.state.oneBeer.attenuation_level}</p>
<p>{this.state.oneBeer.first_brewed}</p>

<p>{this.state.oneBeer.description}</p>

<p>{this.state.oneBeer.contributed_by}</p>


</div> 

: "Loading..."
}

</div>


    </div>
    )
}

}
    
    export default BeerDetail