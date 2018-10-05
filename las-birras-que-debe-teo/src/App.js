import React, { Component } from 'react';
import { Block } from "./components/beerblock";
import data from "./beer.json"

class App extends Component {
  render() {
    return (
      <div>
        {data.data.map(d => (
          <div>
            <Block key={d.title} title={d.title} address={d.address} img={d.img} text={d.text} />
          </div>
        )
        )
        }
      </div>
    );
  } 
}
export default App;
