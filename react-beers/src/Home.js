import React, { Component } from 'react';
import { Link} from "react-router-dom";
import './App.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className='info'>
          <Link to="AllBeers">
            <h1>All Beers</h1>
          </Link>
            <img src="/img/beers.png" alt='all'></img>
            <p>Blah blah blah random info blah blah these are the beers lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum, quam quis semper cursus, massa massa semper ante, at pretium lacus nunc vehicula lacus. Praesent et consectetur ex, sit amet luctus massa. Aenean ullamcorper risus quis lobortis imperdiet. Nulla hendrerit lobortis viverra. Integer elementum dolor at molestie egestas. Integer odio leo, rutrum ut lorem non, malesuada pharetra lacus. Morbi mollis felis ac elementum rhoncus. Morbi eu mollis diam, at viverra nibh. Nam nisi lectus, facilisis sit amet urna porta, efficitur tempor tellus. Duis condimentum nunc urna, quis malesuada mi mollis vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam commodo et elit eget efficitur. Curabitur quis congue sapien. Pellentesque lobortis turpis dolor, in venenatis orci iaculis sed. In commodo sodales dictum.</p>
        </div>
        <div className='info'>
          <Link to="RandomBeer">
            <h1>Random Beer</h1>
          </Link>
            <img src="./img/random-beer.png" alt='random'></img>
            <p>Blah blah blah random info blah blah this is a ranodom beer lorem ipsum dolor sit amet, consectetur adipiscing elit. In nulla augue, efficitur at condimentum non, maximus et eros. Ut ultrices metus nunc, eget volutpat nisi facilisis ut. Nam tempor mauris turpis, et congue urna tristique a. Maecenas ut elit sed lectus viverra iaculis. Duis a nibh sit amet diam eleifend gravida a eget urna. Integer quis rutrum magna, quis sagittis tortor. Donec lectus urna, posuere non ligula eget, lobortis sollicitudin leo. Morbi vitae dui molestie, commodo lectus eget, faucibus enim. Curabitur congue massa in mauris rhoncus ornare. Fusce est nisi, rhoncus semper dapibus a, facilisis sit amet risus. Etiam ac varius libero. Nunc at risus eros. Sed at nisi magna.</p>
        </div>
        <div className='info'>
          <Link to="NewBeer">
            <h1>New Beer</h1>
          </Link>
            <img src="./img/new-beer.png" alt='new'></img>
            <p>Blah blah blah random info blah blah this is a new beer lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum quam lorem, et malesuada sapien volutpat vitae. Integer fringilla dapibus felis et gravida. Aenean scelerisque ex ipsum, in feugiat felis lacinia vitae. Praesent hendrerit porta dignissim. Duis malesuada eu nunc vel sollicitudin. In elit augue, dictum sed consectetur eu, euismod ac eros. Vivamus eget lobortis nisl. Vivamus luctus placerat tellus, vitae faucibus metus condimentum a. Donec commodo mi consectetur libero hendrerit tincidunt. Nullam fermentum lectus libero, eget tempor dolor dignissim eget. Duis tempus consectetur elit. Aenean pellentesque viverra varius. Fusce venenatis lacus eu feugiat accumsan. Vivamus ultricies risus ac eros vestibulum elementum. Morbi quis ultricies dolor, a fringilla metus.</p>
        </div>
      </div>
    );
  }
}
export default Home;