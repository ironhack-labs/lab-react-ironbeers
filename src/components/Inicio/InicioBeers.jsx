import { Link } from "react-router-dom";

function InicioBeers({ imag1, imag2, imag3 }) {
  const CardBeer = { width: "800px", height: "500px", paddingTop: '0.75em' };

  return (
    <div style={CardBeer}>
      <section >
        <Link to='/beer' > <img src={imag1} alt="imag1"></img></Link>
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
        <img src={imag2} alt="imag2"></img>
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
        <img src={imag3} alt="imag3"></img>
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
