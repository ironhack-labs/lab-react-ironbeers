import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import BeerDetail from '../../components/BeerDetail/BeerDetail'


class BeerDetailsPage extends Component {
    state = {
      aBeer: {},
    };

    getABeer = () => {
        //Va a la propiedad "match" del componente BeerDetails y coge el objeto params para llegar al ID
        const { params } = this.props.match;
        axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then((responseFromApi) => {
          this.setState({
            aBeer: responseFromApi.data[0],
          });
          //console.log(responseFromApi.data);
        });
      };

    componentDidMount() {
        this.getABeer();
      }

    render() {
        //console.log(this.state.aBeer)
    return (
        <div>
         <Navbar />
            <BeerDetail eachDetail={this.state.aBeer} />
        </div>
    )
    }
}

export default BeerDetailsPage;

