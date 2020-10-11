import React from 'react';
import BeerAPI from '../api/beerApi';
import SingleBeer from '../components/SingleBeer';

class RandomBeer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        beer: {},
    };
}

  componentDidMount() {
    BeerAPI.getRandomBeer()
        .then((apiResponse) => {
            console.log(apiResponse.data);
            this.setState({ beer: apiResponse.data });
          })
          .catch((apiError) => {
            console.log(apiError);
          });
      }
    

    render() {
        
        return (
            <div>
                <SingleBeer beer={this.state.beer}/>
            </div>
        )
    }
}

export default RandomBeer;

