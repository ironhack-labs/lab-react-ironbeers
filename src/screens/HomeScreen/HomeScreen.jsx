import HomeCard from './../../components/misc/HomeCard/HomeCard';
import image1 from '../../assets/beers.png';
import image2 from '../../assets/random-beer.png';
import image3 from '../../assets/new-beer.png';


export default function HomeScreen() {
  return (
    <div>
      <HomeCard url="/beers" image={image1} title="All Beers" />
      <HomeCard url="/beers/random" image={image2} title="Random Beer" />
      <HomeCard url="/beers/new" image={image3} title="New Beer" />
    </div>
  )
}
