import MyCard from '../components/MyCard';

import AllBeers from '../assets/beers.png';
import NewBeer from '../assets/new-beer.png';
import RandomBeer from '../assets/random-beer.png';
import SportsBarIcon from '@mui/icons-material/SportsBar';

const Lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis cupiditate debitis repudiandae sapiente ex? Maiores sed nostrum quam libero necessitatibus neque amet eum dolorum.';

function HomePage() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '20px 20px 40px' }}>
        <SportsBarIcon sx={{ fontSize: '42px' }} />
        <div style={{ position: 'relative' }}>
          <h1 style={{ margin: '0' }}>Ironbeers</h1>
          <p style={{ fontSize: '20px', position: 'absolute', top: '32px', right: '0' }}>again... -.-</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <MyCard title="All Beers" subtitle="Here you find all our beers" description={Lorem} img={AllBeers} link="beers" />
        <MyCard
          title="Random Beer"
          subtitle="Feeling adventurous? Check out a random beer!"
          description={Lorem}
          img={RandomBeer}
          link="random-beer"
        />
        <MyCard title="New Beer" subtitle="You´re brewing? Awesome!" description={Lorem} img={NewBeer} link="new-beer" />
      </div>
    </>
  );
}
export default HomePage;
