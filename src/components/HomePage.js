import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="all-beers">
          <img src="./images/beers.png" alt="beers" />
          <h2 className="text-left">
            <Link className="badge badge-light ml-3" to="/beers">
              All Beers
            </Link>
          </h2>
          <div className="home-text text-left mb-5 mx-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
              pretium nisi, a sagittis nulla. Integer varius elit eget viverra
              condimentum. Nam nunc eros, tincidunt ut venenatis non, imperdiet
              vitae dolor. Cras semper, sapien ut bibendum suscipit, dolor ipsum
              tincidunt nulla, vel hendrerit eros ante et massa. Aliquam
              molestie non arcu et placerat. Aliquam erat volutpat. Quisque id
              turpis non ipsum cursus laoreet. Fusce blandit faucibus consequat.
              Donec sed mollis ligula. Donec hendrerit fermentum tellus vel
              placerat.
            </p>
          </div>
        </div>
        <div className="random-beer">
          <img src="./images/random-beer.png" alt="beers" />
          <h2 className="text-left">
            <Link className="badge badge-light ml-3" to="/random">
              Random Beer
            </Link>
          </h2>
          <div className="home-text text-left mb-5 mx-2">
            <p>
              Suspendisse sagittis enim interdum erat dignissim, nec tempor
              metus varius. Maecenas consectetur urna tincidunt mattis placerat.
              Sed auctor egestas nibh in rhoncus. Maecenas mauris enim, posuere
              vel purus sit amet, egestas pellentesque purus. Nam at interdum
              nisl. Mauris enim nulla, dictum pulvinar augue ut, volutpat
              dignissim nulla. In consequat cursus laoreet. Curabitur ut dui ac
              est pharetra lacinia et sed ex. Nunc pulvinar porttitor elit et
              rhoncus.
            </p>
          </div>
        </div>
        <div className="new-beer">
          <img src="./images/new-beer.png" alt="new-beer" />
          <h2 className="text-left">
            <Link className="badge badge-light ml-3" to="/new-beer">
              New Beer
            </Link>
          </h2>
          <div className="home-text text-left mb-5 mx-2">
            <p>
              n sed ipsum vitae mauris tempor facilisis. Sed non erat gravida,
              condimentum ante nec, condimentum nisi. Mauris egestas ullamcorper
              leo, quis tempus tortor placerat non. Donec placerat lorem ut
              porta pharetra. Nulla vestibulum, lorem ac laoreet porta, metus
              nulla blandit orci, eu bibendum sem odio at ante. Pellentesque eu
              vulputate leo. Quisque ullamcorper tellus eu enim venenatis cursus
              accumsan nec lorem. Nam consectetur purus vel sapien rhoncus
              bibendum. Mauris molestie blandit velit id ultricies.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
