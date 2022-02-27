import Card from "../components/Card";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {

  return (
    <div>
      <Card
        image={beers}
        title="All Beers"
        text="Vangelis billions upon billions circumnavigated venture
             Sea of Tranquility light years. Vastness is bearable only through love Apollonius of Perga vanquish 
             the impossible Euclid Euclid rich in heavy atoms. Rich in heavy atoms invent the universe vanquish 
             the impossible at the edge of forever a very small stage in a vast cosmic arena hearts of the stars."
        url="/beers"
      />
      <Card
        image={randomBeer}
        title="Random Beers"
        text="The carbon in our apple pies emerged into consciousness at the edge of forever concept of
           the number one from which we spring emerged into consciousness and billions upon billions upon billions upon 
           billions upon billions upon billions upon billions."
        url="/random-beer"
      />
      <Card
        image={newBeer}
        title="New Beer"
        text="Vangelis billions upon billions circumnavigated venture
             Sea of Tranquility light years. Vastness is bearable only through love Apollonius of Perga vanquish 
             the impossible Euclid Euclid rich in heavy atoms. Rich in heavy atoms invent the universe vanquish 
             the impossible at the edge of forever a very small stage in a vast cosmic arena hearts of the stars."
        url="/new-beer"
      />
    </div>
  );
}

export default HomePage;
