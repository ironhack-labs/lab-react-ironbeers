import React from "react"

import MainPageSection from "./MainPageSection"

import image1 from "./MainPageSection/images/beer-1.jpg"
import image2 from "./MainPageSection/images/beer-2.jpg"
import image3 from "./MainPageSection/images/beer-3.jpg"


const MainPage = () => {
    return (

        <section>
                <MainPageSection title="All Beers" imgUrl ={image1} link="/beers"/>
                <MainPageSection title="Random Beer" imgUrl={image2} link="/random-beer"/>
                <MainPageSection title="New Beer" imgUrl={image3} link="/new-beer"/>
        </section>
    )
}

export default MainPage