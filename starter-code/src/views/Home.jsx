import React from 'react'
import Card from "../components/Card";

function Home() {
  return (

    <React.Fragment>
      <Card title={"All Beers"} image={"/images/beers.png"} link={"/beers"} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus dolorem eaque error illo nemo totam vitae voluptatem voluptates voluptatum. Eveniet, ratione, sed?" />

      <Card title={"Random Beer"} image={"/images/random-beer.png"} link={"/random-beer"} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus dolorem eaque error illo nemo totam vitae voluptatem voluptates voluptatum. Eveniet, ratione, sed?" />

      <Card title={"New Beer"} image={"/images/new-beer.png"} link={"/new-beer"} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus dolorem eaque error illo nemo totam vitae voluptatem voluptates voluptatum. Eveniet, ratione, sed?" />
    </React.Fragment>

  )
}

export default Home
