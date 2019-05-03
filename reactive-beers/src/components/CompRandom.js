import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class RandomBeer extends React.Component {
  constructor(props) {
    super(props);

  }
    render() {
        return (
          <div className="RandomBeer">
            <div><Link to='/'>Home</Link></div>
            RandomBeer
          </div>
        )
    }
}

export default RandomBeer;