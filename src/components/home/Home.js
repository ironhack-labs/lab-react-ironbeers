import React from 'react';
import './Home.css';

function Home(props) {
  return (
    <div className="section">
      <div className="div-img">
        <img src={props.image} className="image" />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Home;
