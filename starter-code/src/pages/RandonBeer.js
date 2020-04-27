import React, {Component} from 'react';
import BeerView from "../components/BeerView";
import Header from "../components/Header";
import axios from 'axios';

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

class RandonBeer extends Component {

  state = {
    beer: undefined,
    status: STATUS.LOADING,
  };

  componentDidMount() {
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(res => {
          this.setState({
            beer: res.data,
            status: STATUS.LOADED,
          });
        })
        .catch(err => {
          this.setState({
            status: STATUS.ERROR,
          })
        })
  }

  render() {
    const {status, beer} = this.state;
    return (
      <div>
        <Header/>
        {status === STATUS.LOADED && <BeerView {...beer}/>}
        {status === STATUS.LOADING &&
        <div className={'loading'}>
          <img src="/images/spinner.gif" alt=""/>
        </div>}
        {status === STATUS.ERROR && <p>ERROR!</p>}
      </div>
    );
  }
}

export default RandonBeer;