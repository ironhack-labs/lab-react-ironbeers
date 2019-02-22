import axios from "axios";
import React, { Component } from 'react';
import { NavLink, Route, Switch } from "react-router-dom";
import { Col, Container, Nav, NavItem, Row } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class AllBeers extends Component { 
  render() {
    return (
      <div className="allbeers d-flex justify-content-between flex-wrap overflow-hidden">
        {this.props.beers.map(v => <Beer beer={v} link={v.beerId}/>)}  
      </div>
    )
  }
}

class Beer extends Component { 
  render() {
    if(!this.props.beer) {
      return (
        <div className="beer">Loading</div>
      )
    } else {
      return (
        <div className="beer">
          <img src={this.props.beer.image_url} alt={this.props.beer.description} className="img-fluid"/>  
          <h3>{this.props.beer.name}</h3>
          <h5>{this.props.beer.tagline}</h5>
          <hr/>
          <div>
            <span>{this.props.beer.description}</span>
          </div>
          <div>
            <span>Contibuted By: {this.props.beer.contributed_by}</span>
          </div>
          <span><NavLink to={`/beer/${this.props.beer.name}`}>See Details</NavLink> </span>
        </div>
      ) 
  
    }
  }
}

class Home extends Component { 
  render() {
    return (
      <Row>
        <Col>
          <h2>All Beers</h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur architecto consequatur eligendi quas itaque dolorem. Error atque optio debitis quas officiis veniam quis, laborum illo esse, quod, corporis architecto sapiente?
        </Col>
        <Col>
          <h2>Random Beer</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur reprehenderit temporibus voluptates ipsam mollitia ratione, sed necessitatibus ipsum magni eveniet reiciendis eius consequuntur repellat iure perferendis odio molestiae maxime.
        </Col>
        <Col>
          <h2>Add a Beer</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sit fugit corporis, cumque fuga impedit dicta debitis similique dolor. Voluptatum doloribus ab ducimus totam tempora reiciendis quod id iure a.
        </Col>
      </Row>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: []
    }
  }
  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(response => {
        this.setState({beers: response.data})
    })
  }
  
  render() {
    return (
      <Container>
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/allbeers">All Beers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/randombeer">Random Beer</NavLink>
        </NavItem>          
      </Nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path="/allbeers" render={(props) => <AllBeers beers={this.state.beers}/>}/>
          <Route exact path="/randombeer" render={(props) => {
            let beer = this.state.beers[Math.floor(Math.random() * this.state.beers.length)]
            return <Beer beer={beer}/>
          }}/>
          <Route exact path="/beer/:name" render={(props) => {
            let beer = this.state.beers.filter(v => v.name === props.match.params.name)[0]
            return <Beer beer={beer}/>
          }}/>
        </Switch>
      </Container>
    );
  }
}

export default App;
