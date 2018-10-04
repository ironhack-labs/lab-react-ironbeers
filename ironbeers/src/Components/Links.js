import React, { Component } from 'react';

class Links extends Component {
  render() {
    return (
     <div>
         <hr/>
         <a href="/beers">All Beers</a>
         <hr/>
         <a href="/new-beer">New Beer</a>
         <hr/>
         <a href="/random-beer">Random Beer</a>
         <hr/>
     </div>
    );
  }
}

export default Links;