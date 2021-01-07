import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <div style={{ padding: '0 33% 0 33%' }}>
          <Link exact to="/beers">
            <img
              src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?cs=srgb&dl=pexels-chris-f-1283219.jpg&fm=jpg"
              alt="beers"
              className="images"
              style={{ width: '30vw' }}
            />
            <h1>All Beers</h1>
            <p>
              I have a 10 year old son. He has words. He is so good with these
              words it's unbelievable. He’s not a word hero. He’s a word hero
              because he was captured. I like text that wasn’t captured.
            </p>
          </Link>
        </div>
        <div style={{ padding: '0 33% 0 33%' }}>
          <Link exact to="/random-beer">
            <img
              src="https://images.pexels.com/photos/667986/pexels-photo-667986.jpeg?cs=srgb&dl=pexels-edward-eyer-667986.jpg&fm=jpg"
              alt="beer"
              className="images"
              style={{ width: '30vw' }}
            />
            <h1>Random Beer</h1>
            <p>
              Lorem Ispum is a choke artist. It chokes! Look at these words. Are
              they small words? And he referred to my words - if they're small,
              something else must be small. I guarantee you there's no problem,
              I guarantee.
            </p>
          </Link>
        </div>
        <div style={{ padding: '0 33% 0 33%' }}>
          <Link exact to="/new-beer">
            <img
              src="https://images.pexels.com/photos/533353/pexels-photo-533353.jpeg?cs=srgb&dl=pexels-pixabay-533353.jpg&fm=jpg"
              alt="add-beer"
              className="images"
              style={{ width: '30vw' }}
            />
            <h1>New Beer</h1>
            <p>
              Lorem Ipsum is FAKE TEXT! If Trump Ipsum weren’t my own words,
              perhaps I’d be dating it. Lorem Ipsum best not make any more
              threats to your website. It will be met with fire and fury like
              the world has never seen.
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
