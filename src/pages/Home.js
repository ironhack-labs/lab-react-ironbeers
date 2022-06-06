import { useState } from "react";
import beersApi from "../utils/beersApi";
import Header from "../components/Header";
import homeData from "./data/Home.data";
import HomeLink from "../components/HomeLink";
import Loading from "../components/Loading";
import Error from "../components/Error";
import BeerCard from "../components/BeerCard";

const Home = () => {
    const [search, setSearch] = useState("");
    const [beers, setBeers] = useState([]);

    const handleChange = ({ target: { value } }) => {
        setBeers([]);
        setSearch(value);
        if (value.length > 0) beersApi.filterBeers(value, setBeers);
    };

    console.log(beers)

    return (
        <div>
            <Header type="search" value={search} handleChange={handleChange} />
            {(search.length === 0) && homeData.map(data => <HomeLink key={data.title} {...data} />)}
            {((search.length > 0) && (beers.length === 0)) && <Loading />}
            {((search.length > 0) && (beers.length > 0) && beers[0].status) && <Error {...beers[0]} />}
            {((search.length > 0) && (beers.length > 0) && !beers[0].status) && (
                beers.map(beer => <BeerCard key={beer._id} {...beer} />)
            )}
        </div>
    );
};

export default Home;