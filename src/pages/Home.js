import homeData from "./data/homeData";
import HomeLink from "../components/HomeLink";

const Home = () => (
    <div>
        {homeData.map(data => <HomeLink key={data.title} {...data} />)}
    </div>
);

export default Home;