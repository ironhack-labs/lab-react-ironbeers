import React from 'react';
// import './Header.css';
import { Route, Switch, Link } from 'react-router-dom';

class HomePage extends React.Component {
  state = {
    beers: [],
  };

  //   componentDidMount = () => {
  //     // getAllQuestions().then((questions) => {
  //     //   this.setState({ questions });
  //     // });

  //     axios.get('http://localhost:5005').then((responseBack) => {
  //       // console.log("responseBack:", responseBack);
  //       this.setState({ questions: responseBack.data });
  //     });
  //   };

  render() {
    return (
      <div className="homePage">
        <Link to={`/beers`}>
          <div>
            <h1>All Beers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              leo vel ligula faucibus blandit tristique ac tortor. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.{' '}
            </p>
          </div>
        </Link>
        <Link to={`/random-beer`}>
          <div>
            <h1>Random Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              leo vel ligula faucibus blandit tristique ac tortor. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.{' '}
            </p>
          </div>
        </Link>
        <Link to={`/new-beer`}>
          <div>
            <h1>New Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              leo vel ligula faucibus blandit tristique ac tortor. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.{' '}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default HomePage;
