import Logo from '../components/Logo';
import HomeCard from '../components/HomeCard';
import AllBeers from '../assets/beers.png';
import NewBeer from '../assets/new-beer.png';
import RandomBeer from '../assets/random-beer.png';

const Lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis cupiditate debitis repudiandae sapiente ex? Maiores sed nostrum quam libero necessitatibus neque amet eum dolorum.';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const cards = [
  { title: 'All Beers', subtitle: 'Here you find all our beers', description: `${Lorem}`, img: `${AllBeers}`, link: 'beers' },
  { title: 'Random Beer', subtitle: 'Feeling adventurous? Get a random beer!', description: `${Lorem}`, img: `${RandomBeer}`, link: 'random-beer' },
  { title: 'New Beer', subtitle: 'You´re brewing? Awesome!', description: `${Lorem}`, img: `${NewBeer}`, link: 'new-beer' },
];

function HomePage() {
  return (
    <>
      <Logo />
      <div style={containerStyle}>
        {cards.map((card) => (
          <HomeCard key={card.link} props={card} />
        ))}
      </div>
    </>
  );
}
export default HomePage;
