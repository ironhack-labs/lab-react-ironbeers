import React from "react";
import "./../styles/Home.css";
import {Link} from "react-router-dom";


export default function Home() {
    let paths = [
        {path: "all-beers", msg: "All Beers"},
        {path: "random-beer", msg: "Random Beer"},
        {path: "new-beer", msg: "New Beer"}]

    return(
        <section className="page home-page">
            {paths.map((el, i) => (
                <div className="home-box" key={i}>
                    <img src={"./images/"+el.path+".png"} alt={el.msg}/>
                    <div className="home-box-info">
                        <Link to={"/"+el.path}>{el.msg}</Link>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam omnis repellat esse atque. Delectus corrupti eaque omnis fuga architecto accusamus, quibusdam tempora deserunt, modi itaque laudantium ad! Tempore, eaque nam.</p>
                    </div>
                </div>
            ))}
        </section>
    )
}