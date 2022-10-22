import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <div>
      <div className='card' style={{ width: "30rem" }}>
        <img src={beers} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>All Beers</h5>
          <p className='card-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio hic
            ad nemo, sint tenetur, eligendi natus possimus saepe quia distinctio
            nisi aut quam assumenda quidem nam nulla suscipit. Explicabo, cum?
          </p>
        </div>
      </div>
      <div className='card' style={{ width: "30rem" }}>
        <img src={randomBeer} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Random Beer</h5>
          <p className='card-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio hic
            ad nemo, sint tenetur, eligendi natus possimus saepe quia distinctio
            nisi aut quam assumenda quidem nam nulla suscipit. Explicabo, cum?
          </p>
        </div>
      </div>
      <div className='card' style={{ width: "30rem" }}>
        <img src={newBeer} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>New Beer</h5>
          <p className='card-text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio hic
            ad nemo, sint tenetur, eligendi natus possimus saepe quia distinctio
            nisi aut quam assumenda quidem nam nulla suscipit. Explicabo, cum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
