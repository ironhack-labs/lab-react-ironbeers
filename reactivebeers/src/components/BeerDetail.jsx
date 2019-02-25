import React from "react";
import Header from "./Header";
import axios from "axios";

class BeerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beerDetail: {} };
  }

  getBeerDetail = () => {
    const specificId = this.props.match.params.beerId;
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${specificId}`)
      .then(responseFromApi => {
        this.setState({
          beerDetail: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getBeerDetail();
  }

  render() {
    // console.log(this.props.match.params.beerId)
    // console.log(this.state)
    const singleBeer = this.state.beerDetail;
    console.log(singleBeer);
    return (
      <div>
        <Header />
        <div>
          <div>
            <img src={singleBeer.image_url} />
          </div>
          <div>
            <div>
              <div>
                <h2>{singleBeer.name}</h2>
              </div>
              <div>
                <h4>{singleBeer.tagline}</h4>
              </div>
            </div>
            <div>
              <div>
                <h2>{singleBeer.attenuation_level}</h2>
              </div>
              <div>
                <h4>{singleBeer.first_brewed}</h4>
              </div>
            </div>
            <div>
              <p>{singleBeer.description}</p>
              <p>{singleBeer.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
