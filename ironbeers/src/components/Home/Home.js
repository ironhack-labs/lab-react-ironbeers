import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/2/4/2448.jpg"
            alt=""
          />
           <h2><Link to="/Beers">Beers</Link></h2>
         
          <p>hgjhgkhghgjhgjhgjhgkhghkjghjgg</p>
        </div>
        <div>
          <img
            src="https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/2/4/2448.jpg"
            alt=""
          />
          <h2><Link to="/NewBeers">New beers</Link></h2>
          <p>hgjhgkhghgjhgjhgjhgkhghkjghjgg</p>
        </div>
        <div>
          <img
            src="https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/1800x/040ec09b1e35df139433887a97daa66f/2/4/2448.jpg"
            alt=""
          />
          <h2><Link to="/RandomBeers">Random beers</Link></h2>
          <p>hgjhgkhghgjhgjhgjhgkhghkjghjgg</p>
        </div>
      </div>
    );
  }
}
