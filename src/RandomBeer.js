import React from 'react'
// import { Beers } from './Beers';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import Header from './Header';



export default class RandomBeer extends React.Component {

    state = {
        randomBeer: {}
    }

    getRandomBeerData = () => {
        
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
          .then(response => {
            console.log(response.data);
            this.setState({
              randomBeer: response.data
            })
          })
          .catch(err => console.log(err));
      }
    
      componentDidMount() {
        this.getRandomBeerData();
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
          this.getRandomBeerData();
        }
      }

    render() {

        const beer = this.state.randomBeer;
        console.log(beer);

        return (
            <>
            <div style={{padding: '20px'}}>
            <Link to={"/beers"}>Back to beers</Link>
            </div>
            <div>
                <img style={{ height: '150px' }} src={beer.image_url} />
                <h3>{beer.name}</h3>
                <h4 style={{ color: 'grey' }}>"{beer.tagline}"</h4>
                <p><b>First Brewed: </b>{beer.first_brewed}</p>
                <p><b>Attenuation level: </b>{beer.attenuation_level}</p>
                <h4>{beer.description}</h4>
                <p><b>Created by: </b>{beer.contributed_by}</p>
            </div>
            </>
        )
    }
}











// export default function SingleBeer (props) {

//     const BeerId = props.match.params.id;
    
//     console.log( BeerId );

//     return (
//         <div>
            
//             <Link to="/beers">Back to Beers</Link>
//         </div>
//     )
// }