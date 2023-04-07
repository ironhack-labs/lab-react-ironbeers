import infoBeerLinks from "../api/beersLinks";
import BeersTemplate from "../components/home/BeersTemplate";
import "../components/home/home.css";

const Home = () => {
  return (
    <div className="home">
      {infoBeerLinks.map((info, i) => (
        <BeersTemplate key={i} {...info} />
      ))}
    </div>
  );
};

export default Home;
