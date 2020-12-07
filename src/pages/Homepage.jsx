import React from 'react';

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <a href="/list">
          <h2>All Beers</h2>
        </a>

        <h2>Random Beer</h2>

        <a href="/new">
          <h2>New Beer</h2>
        </a>
      </div>
    );
  }
}

export default Homepage;
