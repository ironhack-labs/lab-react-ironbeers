import { Link } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

function Home() {
  return (
    <div>
      <h1>IronBeers</h1>
      <Card
        hoverable
        style={{
            margin:"50px"
        }}
        cover={<img alt="example" src={require("../assets/beers.png")} />}
      >
        <Meta 
          title=<Link to={"/beers"} >List of all beers</Link>
          description="you should see this..."
        />
      </Card>
      <Card
        hoverable
        
        style={{
          margin:"50px"
        }}
        cover={<img alt="example" src={require("../assets/random-beer.png")} />}
      >
        <Meta
          title=<Link to={"/random-beer"}>Get Random-Beer</Link>
          description="you should see this..."
        />
      </Card>
      <Card
        hoverable
        style={{
            margin:"50px"
        }}
        cover={<img alt="example" src={require("../assets/beers.png")} />}
      >
        <Meta
          title=<Link to={"/new-beer"}>New Beer</Link>
          description="you should see this..."
        />
      </Card>

      <br />

      <br />

    </div>
  );
}

export default Home;
