import React from "react";
import { Card } from "../components/Card";


export const HomePage = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns has-text-centered">
        
          <Card title="All Beers" to="/list-beers" image="https://images.pexels.com/photos/63633/bar-local-cong-ireland-63633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          <Card title="Random Beer" to="/random-beer" image="https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
          <Card title="New Beer" to="/new-beer" image="https://images.pexels.com/photos/1025113/pexels-photo-1025113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        </div>
      </div>
    </div>
  );
};
