import homeData from "./data/home.data";
import HomeLink from "../components/HomeLink";

const Home = () => {
    return (
        <div>
            {homeData.map(data => <HomeLink key={data.title} {...data} />)}
        </div>
    )
};

export default Home;