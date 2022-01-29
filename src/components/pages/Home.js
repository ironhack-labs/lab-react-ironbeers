import HomeCard from "../HomeCard";
import beers from "../../assets/beers.png"
import newBeer from "../../assets/new-beer.png"
import randomBeer from "../../assets/random-beer.png"



const Home = () => {

  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi turpis, sodales placerat suscipit eu, vehicula id ipsum. Vestibulum risus eros, bibendum non tempus eu, tempor sed nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean venenatis orci urna, non efficitur dui auctor semper."
  return <div className="home">
        <HomeCard image={beers} title="All Beers" text={lorem} to="/beers"/>
        <HomeCard image={randomBeer} title="Random Beer" text={lorem}/>
        <HomeCard image={newBeer} title="New Beer" text={lorem}/>
  </div>;
};

export default Home;
