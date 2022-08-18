import { Link } from "react-router-dom";
import img1 from '../assets/beers.png'
import img2 from '../assets/new-beer.png'
import img3 from '../assets/random-beer.png'

function InicioBeers() {
  const CardBeer = { width: "800px", height: "500px", paddingTop: '0.75em',paddingLeft:'280px' };
 
  return (
    <div style={CardBeer}>
      <section >
        <Link to='/list-beer' > <img src={img1} alt="imag1"></img></Link>
        <h2>All Beers</h2>
        <p style={{textAlign:"justify"}} >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
      </section>
      <br/>
      <section>
        <Link to='/new'><img src={img2} alt="imag2"></img></Link>
        <h2>New Beer</h2>
        <p style={{textAlign:"justify"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
      </section>
      <br/>
      <section>
      <Link to='/random'><img src={img3} alt="imag3"></img></Link>
        <h2>Random Beer</h2>
        <p style={{textAlign:"justify"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </section>
    </div>
  );
}

export default InicioBeers;
