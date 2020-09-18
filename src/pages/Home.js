import React from 'react'
import { Card, Menu } from 'antd';
import { Link } from "react-router-dom"


const { Meta } = Card;

const styleImg = {width: "700px", height: "500px", objectFit: "cover"}

function Home() {
    return (
       <center>
        <Card
        style={{ width: 800 }}
        cover={
            
          <Link to='/all'>
          <img
            style={styleImg}
            alt="example"
            src="https://athomebrewer.com/wp-content/uploads/2020/02/dreamstime_xxl_78099929-768x513.jpg"
          />
          </Link>
         
        }
       
      >
        <Meta
          title="All Beers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Card >
      <Card
        style={{ width: 800 }}
        cover={
            <Link to='beer/random'>
          <img
            style={styleImg}
            alt="example"
            src="https://athomebrewer.com/wp-content/uploads/2020/02/dreamstime_xxl_78099929-768x513.jpg"
          />
           </Link>
        }
       
      >
        <Meta
          title="Random Beers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Card>
      <Card
        style={{ width: 800 }}
        cover={
            <Link to='/new'>
          <img
            style={styleImg}
            alt="example"
            src="https://www.thebeijinger.com/sites/default/files/thebeijinger/blog-images/313215/cmasbeer.png"
            
          />
          </Link>
        }
       
      >
        <Meta
          title="New Beers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Card>
      </center> 

      
    );
    
}

export default Home