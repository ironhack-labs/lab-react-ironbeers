import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Home from './Components/Home';
import Beers from './Components/Beers';
import Single from './Components/Single';
import BeerForm from './Components/BeerForm';

class Router extends React.Component {
  state = {
    beers: [],
    from: 0,
    to: 9
  };

  componentDidMount = async () => {
    const { data: beers } = await axios.get('https://ih-beer-api.herokuapp.com/beers');
    this.setState(() => {
      return { beers };
    });
  };

  handleChange = value => {
    this.setState(() => {
      const from = value * 9;
      const to = value * 9 + 10;

      return { from, to };
    });
  };

  render() {
    const { beers, from, to } = this.state;
    console.log(beers);
    return (
      <BrowserRouter>
        <Layout>
          <Layout.Header id="header">
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <NavLink exact to="/">
                  <Icon type="home" />
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink exact to="/beers" className="link">
                  All beers
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink exact to="/beers/random" className="link">
                  Random beer
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink exact to="/new-beer" className="link">
                  Add beer
                </NavLink>
              </Menu.Item>
            </Menu>
          </Layout.Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/beers"
              render={props => <Beers beers={beers} from={from} to={to} handleChange={this.handleChange} {...props} />}
            />
            <Route exact path="/beers/:id" component={Single} />
            <Route exact path="/new-beer" component={BeerForm} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
export default Router;