import React from 'react';
import axios from 'axios';

class OneBeer extends React.Component {
    
    
   
   
    state = {
       beer: null,
   };

   componentDidMount() {
       const id = this.props.match.params.id;

       axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
       .then((response) => {
           console.log(response);
           this.setState({ beer : response.data});
       })
       .catch((err)=> {
           console.log(err);
       });
   };
    
    render() {
        if (this.state.beer === null) {
            return <div>Your beer is cooling ...</div>;
          }

        return (
            <div>
                <h1>Your beer !</h1>
                <img src={this.state.beer.image_url} alt="" />
                <h2>{this.state.beer.name}</h2>
                <h3><em>{this.state.beer.tagline}</em></h3>
                <p><span>{this.state.beer.first_brewed}</span></p>
                <p>{this.state.beer.description}</p>
            </div>
        )
    }
}

export default OneBeer;
