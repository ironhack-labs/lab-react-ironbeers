import React from "react";
import Header from "./Header";
import axios from "axios";

class RandomBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerDetail: {},
      isLoaded: false
    };
  }

  getBeerDetail = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        this.setState({
          beerDetail: responseFromApi.data,
          isLoaded: true
        });
      });
  };

  componentDidMount() {
    this.getBeerDetail();
  }

  render() {
    const oneRandomBeer = this.state.beerDetail;
    if (!this.state.isLoaded) {
      return <h2>loading random Beer</h2>;
    } else {
      console.log(oneRandomBeer[0].image_url);
      return (
        <div>
          <Header />
          <div>
            <div>
              <img src={oneRandomBeer[0].image_url} />
            </div>
            <div>
              <div>
                <div>
                  <h2>{oneRandomBeer[0].name}</h2>
                </div>
                <div>
                  <h4>{oneRandomBeer[0].tagline}</h4>
                </div>
              </div>
              <div>
                <div>
                  <h2>{oneRandomBeer[0].attenuation_level}</h2>
                </div>
                <div>
                  <h4>{oneRandomBeer[0].first_brewed}</h4>
                </div>
              </div>
              <div>
                <p>{oneRandomBeer[0].description}</p>
                <p>{oneRandomBeer[0].contributed_by}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RandomBeer;
