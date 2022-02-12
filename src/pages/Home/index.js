import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  console.log("PROPS EN HOME", props.beersData);
  return (
    <div className="uk-child-width-1-2@m home-container" uk-grid>
      <Link to="/list-beers">
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg"
              alt=""
            />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">All beers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              src="https://prod-discovery.edx-cdn.org/media/course/image/8a140470-bc70-4f7f-a9aa-df0284469b0b-8fd792a7b326.small.jpeg"
              alt=""
            />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">Random Beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/29/23/57/beer-2695358__340.jpg"
              alt=""
            />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">New beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;
