import infoBeerLinks from "../api/beersLinks";
import BeersTemplate from "../components/home/BeersTemplate";

const Home = () => {
  return (
    <div>
      {infoBeerLinks.map((info, i) => (
        <BeersTemplate key={i} {...info} />
      ))}
    </div>
  );
};

export default Home;
