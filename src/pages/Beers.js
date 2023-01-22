import Header from "../components/Header";
import { useEffect, useState } from "react";
import BeerListItem from "../components/BeerListItem";

export default function Beers() {
    let [list, setList] = useState([]);
   
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
        .then(data=>{ 
            setList(data)})
    },[]);

    return (
        <>
            <Header />
             <div>Beers page</div>
            {list.map(item => <BeerListItem data={item} key={item.name} />)}
        </>
    )
}