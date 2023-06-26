import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <div className="page">
        <NavLink to="/beers">
          <img
            src="https://cdn.pixabay.com/photo/2013/11/12/01/29/bar-209148_1280.jpg"
            alt=""
          />
          <div>
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              vehicula nisi. Vivamus sit amet tempus velit. Vestibulum sed
              egestas turpis. Pellentesque bibendum libero quis facilisis
              pulvinar. Fusce augue felis.
            </p>
          </div>
        </NavLink>
      </div>

      <div className="page">
        <NavLink to="/random-beer">
          <img
            src="https://cdn.pixabay.com/photo/2015/09/24/20/36/beer-barrel-956322_640.jpg"
            alt=""
          />
          <div>
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              vehicula nisi. Vivamus sit amet tempus velit. Vestibulum sed
              egestas turpis. Pellentesque bibendum libero quis facilisis
              pulvinar. Fusce augue felis.
            </p>
          </div>
        </NavLink>
      </div>

      <div className="page">
        <NavLink to="/new-beer">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/31/16/51/beer-3444480_640.jpg"
            alt="beers"
          />
          <div>
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              vehicula nisi. Vivamus sit amet tempus velit. Vestibulum sed
              egestas turpis. Pellentesque bibendum libero quis facilisis
              pulvinar. Fusce augue felis.
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
