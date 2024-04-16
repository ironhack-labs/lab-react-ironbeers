import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {

  return (
    <main className="flex flex-col">
      <section className="mt-5">
        <Link to={"/beers"} className="text-black no-underline flex flex-col items-center">
          <img src={beers} alt="Beers image" className="shadow-lg"/>
          <div className="flex flex-col items-start max-w-[680px] mt-3">
            <h2 className="mb-1">All Beers</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lorem sit amet urna sagittis cursus non a dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae sodales ipsum, sed elementum leo. Pellentesque eget neque varius, lacinia augue ac, fermentum libero. Aliquam maximus posuere sapien nec ullamcorper. Integer laoreet ligula augue, ac pellentesque ipsum efficitur in. Quisque nec elit mauris. Donec a nibh at velit dignissim pharetra. Nulla sapien urna, tincidunt sed ultrices vel, malesuada aliquet urna.</p>
          </div>
        </Link>
      </section>

      <section className="mt-4">
        <Link to={"/random-beer"} className="text-black no-underline flex flex-col items-center">
          <img src={randomBeer} alt="Beers image" className="shadow-lg"/>
          <div className="flex flex-col items-start max-w-[680px] mt-3">
            <h2 className="mb-1">Random Beer</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lorem sit amet urna sagittis cursus non a dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae sodales ipsum, sed elementum leo. Pellentesque eget neque varius, lacinia augue ac, fermentum libero. Aliquam maximus posuere sapien nec ullamcorper. Integer laoreet ligula augue, ac pellentesque ipsum efficitur in. Quisque nec elit mauris. Donec a nibh at velit dignissim pharetra. Nulla sapien urna, tincidunt sed ultrices vel, malesuada aliquet urna.</p>
          </div>
        </Link>
      </section>
      
      <section className="my-4">
        <Link to={"/new-beer"} className="text-black no-underline flex flex-col items-center">
          <img src={newBeer} alt="Beers image" className="shadow-lg"/>
          <div className="flex flex-col items-start max-w-[680px] mt-3">
            <h2 className="mb-1">New Beer</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lorem sit amet urna sagittis cursus non a dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vitae sodales ipsum, sed elementum leo. Pellentesque eget neque varius, lacinia augue ac, fermentum libero. Aliquam maximus posuere sapien nec ullamcorper. Integer laoreet ligula augue, ac pellentesque ipsum efficitur in. Quisque nec elit mauris. Donec a nibh at velit dignissim pharetra. Nulla sapien urna, tincidunt sed ultrices vel, malesuada aliquet urna.</p>
          </div>
        </Link>
      </section>
    </main>
  )
}

export default HomePage;
