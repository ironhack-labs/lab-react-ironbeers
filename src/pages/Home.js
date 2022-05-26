import homeData from "./data/Home.data";
import HomeLink from "../components/HomeLink";

const Home = () => (
    <div>
        {homeData.map(data => <HomeLink key={data.title} {...data} />)}
    </div>
);

export default Home;