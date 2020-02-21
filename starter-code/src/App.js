import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers">
          <img src="/images/beers.png" alt="all-beers" />
        </Link>
        <h3>All Beers</h3>

        <Link to="/random-beer">
          <img src="/images/random-beer.png" alt="random-beers" />
        </Link>
        <h3>Random Beers</h3>

        <Link to="/new-beer">
          <img src="/images/new-beer.png" alt="new-beers" />
        </Link>
        <h3>New Beer</h3>
      </div>
    );
  }
}

const NavBar = () => {
  return (
    <nav>
      {/* <img src="/images/home2.png" alt="home-icon" /> */}
      <h1>
        <Link to="/">IronBeers</Link>
      </h1>
    </nav>
  );
};

class BeerCard extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => response.json())
      .then(beersJSON => {
        console.log("hi", beersJSON);
        this.setState({
          beers: beersJSON
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.beers.map(beer => {
          return (
            <div className="beer-card">
              <div className="card-img">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="card-details">
                <h3>
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                </h3>
                <p>{beer.tagline}</p>
                <p className="caption">Contributed by: {beer.contributed_by}</p>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

class BeerDetail extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    const beerId = this.props.match.params.beerId;

    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => response.json())
      .then(beersJSON => {
        let found = beersJSON.find(beer => {
          return beer._id === beerId;
        });
        return found;
      })
      .then(found => {
        this.setState({
          beer: found
        });
      });
  }

  render() {
    console.log(this.state.beer);
    return (
      <React.Fragment>
        <NavBar />
        <div className="wrapper">
          <div className="beer-detail-image">
            <img src={this.state.beer?.image_url} alt={this.state.beer?.name} />
          </div>
          <div className="beer-detail-content">
            <div className="line-1">
              <h3>{this.state.beer?.name}</h3>
              <p>{this.state.beer?.attenuation_level}</p>
            </div>

            <div className="line-2">
              <p className="tagline">{this.state.beer?.tagline}</p>
              <p>{this.state.beer?.first_brewed}</p>
            </div>

            <div className="line-3">
              <p>{this.state.beer?.description}</p>
            </div>

            <div className="line-4">
              <p className="caption">{this.state.beer?.contributed_by}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class AllBeers extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="wrapper">
          <div className="beer-list-container">
            <BeerCard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class RandomBeer extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => response.json())
      .then(beer => {
        this.setState({ beer: beer });
      });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="wrapper">
          <div className="beer-detail-image">
            <img src={this.state.beer?.image_url} alt={this.state.beer?.name} />
          </div>
          <div className="beer-detail-content">
            <div className="line-1">
              <h3>{this.state.beer?.name}</h3>
              <p>{this.state.beer?.attenuation_level}</p>
            </div>

            <div className="line-2">
              <p className="tagline">{this.state.beer?.tagline}</p>
              <p>{this.state.beer?.first_brewed}</p>
            </div>

            <div className="line-3">
              <p>{this.state.beer?.description}</p>
            </div>

            <div className="line-4">
              <p className="caption">{this.state.beer?.contributed_by}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class NewBeer extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beers/:beerId" component={BeerDetail} />
          <Route path="/beers" component={AllBeers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
