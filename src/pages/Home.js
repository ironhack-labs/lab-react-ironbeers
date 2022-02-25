import AllBeersImg from "../assets/beers.png";
import RandomBeerImg from "../assets/random-beer.png";
import NewBeerImg from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <img src={AllBeersImg} alt="All Beers" className="page-img" />
      <h2>All Beers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
        dictum elementum. Integer eu vestibulum mi. Suspendisse eleifend, neque
        id posuere accumsan, lacus ante pharetra mauris, et aliquam eros arcu
        vel dui. Sed ac ultricies felis. Pellentesque tristique sit amet ex et
        aliquam.
      </p>
      <img src={RandomBeerImg} alt="Random Beer" className="page-img" />
      <h2>Random Beer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
        dictum elementum. Integer eu vestibulum mi. Suspendisse eleifend, neque
        id posuere accumsan, lacus ante pharetra mauris, et aliquam eros arcu
        vel dui. Sed ac ultricies felis. Pellentesque tristique sit amet ex et
        aliquam.
      </p>
      <img src={NewBeerImg} alt="New Beer" className="page-img" />
      <h2>All Beers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
        dictum elementum. Integer eu vestibulum mi. Suspendisse eleifend, neque
        id posuere accumsan, lacus ante pharetra mauris, et aliquam eros arcu
        vel dui. Sed ac ultricies felis. Pellentesque tristique sit amet ex et
        aliquam.
      </p>
    </div>
  );
}

export default Home;
