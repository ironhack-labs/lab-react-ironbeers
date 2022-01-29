import OptionLink from './OptionLink';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

const Home = () => {
  const options = [
    {
      path: 'beers',
      title: 'All beers',
      description: 'Lorem ipsum...',
      image: beersImage,
    },
    {
      path: 'random-beer',
      title: 'Random beer',
      description: 'Lorem ipsum...',
      image: randomBeerImage,
    },
    {
      path: 'new-beer',
      title: 'New beer',
      description: 'Lorem ipsum...',
      image: newBeerImage,
    },
  ];

  return (
    <div className="container p-3">
      <div className="columns">
        {options.map(({ path, title, description, image }) => {
          return (
            <div className="column" key={path}>
              <OptionLink
                path={path}
                title={title}
                description={description}
                image={image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
