import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>HOME PAGE</h1>
      
      <Link to="/beers">Beers</Link>
      <Link to="/random-beer">Random-Beer</Link>
      <Link to="/new-beer">New-Beer</Link>
    </>
  );
}
export default HomePage
