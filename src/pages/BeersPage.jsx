import BeersList from "../components/BeersList";
import Navbar from "../components/Navbar";
import "../App.css"

const BeersPage = () => {
  return (
    <>
      <Navbar />
      <div className="body">
        <BeersList />
      </div>
    </>
  );
};

export default BeersPage;
