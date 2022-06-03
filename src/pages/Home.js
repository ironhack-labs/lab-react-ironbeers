import Header from "../components/Header";
import homeData from "./data/Home.data";
import HomeLink from "../components/HomeLink";

const Home = () => (
    <div>
        <Header type="search" />
        {homeData.map(data => <HomeLink key={data.title} {...data} />)}
    </div>
);

export default Home;