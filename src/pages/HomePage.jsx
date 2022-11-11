import MyCard from '../components/MyCard';

import AllBeers from '../assets/beers.png';
import NewBeer from '../assets/new-beer.png';
import RandomBeer from '../assets/random-beer.png';

const Lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis cupiditate debitis repudiandae sapiente ex? Maiores sed nostrum quam libero necessitatibus neque amet eum dolorum.';

function HomePage() {
  return (
    <>
      <MyCard title="All Beers" subtitle="Here you find all our beers" description={Lorem} img={AllBeers} link="AllBeers" />
      <MyCard title="Random Beer" subtitle="Feelin adventurous? Check out a random beer!" description={Lorem} img={RandomBeer} link="RandomBeer" />
      <MyCard title="New Beer" subtitle="You´re brewing? Awesome!" description={Lorem} img={NewBeer} link="NewBeer" />
    </>
  );
}
export default HomePage;
