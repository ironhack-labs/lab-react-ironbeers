import React, { Component } from 'react';

import View from './View';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <View
          link="/beers"
          image="https://images.unsplash.com/photo-1533922922960-9fceb9ef4733?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6bdf978a903113c56e96c6e2808a0a6f&auto=format&fit=crop&w=750&q=80"
          title="All Beers"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <View
          link="/random-beer"
          image="https://images.unsplash.com/photo-1530170096923-d3316ab08c87?ixlib=rb-0.3.5&s=3c62fb7d194802c65d8dcbdcb328d9fb&auto=format&fit=crop&w=755&q=80"
          title="Random Beers"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <View
          link="/new-beer"
          image="https://images.unsplash.com/photo-1484506322535-0f7c24360384?ixlib=rb-0.3.5&s=b5487db560d238cb78e753be0131f04f&auto=format&fit=crop&w=757&q=80"
          title="New Beers"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
    );
  }
}

export default HomePage;
