import React, { Component } from 'react';
import API from './API';
import BeerPreview from './BeerPreview';
import Loading from './Loading';
import Error from './Error';

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class BeerList extends Component {
  state = {
    beers: [],
    status: STATUS.LOADING,
    error: undefined,
  };

  componentDidMount() {
    API('get', '/')
      .then((response) => {
        this.setState({
          beers: response.data,
          status: STATUS.LOADED,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          status: STATUS.ERROR,
        });
      })
  }

  render() {
    const { beers, status, error } = this.state;
    console.log('beers', beers);
    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <Loading />
      case STATUS.LOADED:
        return (
        <div>
        {beers.map((beer, i) => <BeerPreview key={beer.name + i} beer={beer} />)}
        {/* <Route path='/beers' render={(props) => <BeerPreviews {...props} beers={beers} />} /> */}
        </div>
        )
      case STATUS.ERROR:
        return <Error error={error} />
    }
  }
}

// const BeerPreviews = ({ beers }) => {
//   return (
//     <div>
//       {beers.map((beer, i) => <BeerPreview key={beer.name + i} beer={beer} />)}
//     </div>
//   )
// }
