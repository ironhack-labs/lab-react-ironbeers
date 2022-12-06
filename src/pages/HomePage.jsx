import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

const HomePage = () => {
  return (
    <main>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.9} className="greeter">
          <h1>Hello you!</h1>
          <h3>Like to research a variaty of beers?</h3>
          <p>Scroll down && get familiar with the Ironbeers Collection</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.9}>
          <Link to="/beers" className="Link">
            <section>
              <img src={beersImg} alt="All Beers" />
              <div>
                <h2>All Beers</h2>
                <p>
                  Doggo ipsum very taste wow fluffer blop very taste wow blep h*ck smol borking doggo with a long snoot for pats I am bekom fat, borkdrive
                  heckin good boys and girls wrinkler you are doin me a concern I am bekom fat bork.
                </p>
              </div>
            </section>
          </Link>

          <Link to="/random-beer" className="Link">
            <section>
              <img src={newBeerImg} alt="random beer" />
              <div>
                <h2>Radon Beer</h2>
                <p>
                  Boofers long doggo big ol snoot you are doing me the shock fluffer, long bois blop super chub smol. Pupperino many pats mlem stop it fren the
                  neighborhood pupper, length boy aqua doggo very jealous pupper. borking doggo.
                </p>
              </div>
            </section>
          </Link>

          <Link to="/new-beer" className="Link">
            <section>
              <img src={randomBeerImg} alt="new beer" />
              <div>
                <h2>New Beer</h2>
                <p>
                  Stop it fren noodle horse woofer boof tungg long woofer, what a nice floof pats length boy you are doing me a frighten. Pupperino doggorino
                  puggo, very taste wow. I am bekom fat adorable doggo long bois shibe h*ck, many pats fluffer lotsa pats.
                </p>
              </div>
            </section>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.9} className="greeter">
          <h2>Already got an Ironbeer? You missed the beers</h2>
          <h3>Scroll Up</h3>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
};

export default HomePage;
