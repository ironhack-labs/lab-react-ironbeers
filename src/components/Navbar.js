import React from 'react';
import {
  Container,
  Menu,
  Visibility,
  Segment,
} from 'semantic-ui-react';
import {  NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { fixed } = this.state;
    const { activeItem } = this.state;

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment inverted textAlign="center" vertical         
>
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item
                exact
                to="/"
                as={NavLink}
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>
              <Menu.Item
                to="/beers"
                as={NavLink}
                active={activeItem === 'beers'}
                onClick={this.handleItemClick}
              >
                All
              </Menu.Item>
              <Menu.Item
                to="/random-beer"
                as={NavLink}
                active={activeItem === 'random-beer'}
                onClick={this.handleItemClick}
              >
                Random
              </Menu.Item>
              <Menu.Item
                to="/new-beer"
                as={NavLink}
                active={activeItem === 'new-beer'}
                onClick={this.handleItemClick}
              >
                New
              </Menu.Item>

     
            </Container>
          </Menu>
        </Segment>
      </Visibility>
    );
  }
}

export default Navbar;
