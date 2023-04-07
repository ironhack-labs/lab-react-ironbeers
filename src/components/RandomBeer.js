import { Link } from "react-router-dom"


function RandomBeer() {
  return (
    <>
      <header>
        <Link to={"/"}> Home</Link>
      </header>
      <section>
        <h1> Hello</h1>
      </section>
    </>
  );
}

export default RandomBeer