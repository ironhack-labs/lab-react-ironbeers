import React from "react"
import { LinkCard } from "../components/LinkCard";

export const Home = ()=>{
    return(
        <div>
            <LinkCard img={"https://www.abc.net.au/news/image/9680296-3x2-700x467.jpg"} link={"beers"}>See all the beers</LinkCard>
            <LinkCard img={"https://static.vinepair.com/wp-content/uploads/2016/03/barrel-aged-inside.jpg"} link={"newbeer"}>Create a beer</LinkCard>
            <LinkCard img={"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/03/06/12/irish-beers-lifestyle.jpg"} link={"randombeer"}>See a randombeer</LinkCard>
        </div>
    )
}
