import HomeSection from "../components/HomeSection";

function Home() {
  return (
    <div>
      <HomeSection img="/assets/beers.png" title="All Beers" url="/beers" />
      <HomeSection
        img="/assets/random-beer.png"
        title="Random Beer"
        url="/random-beer"
      />
      <HomeSection
        img="/assets/new-beer.png"
        title="New Beer"
        url="/new-beer"
      />
    </div>
  );
}

export default Home;
