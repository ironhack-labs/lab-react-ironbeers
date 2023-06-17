import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <div className="home-card">
        <Link to={"/beers"} style={{ textDecoration: "none", color: "black" }}>
          <img
            src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/06/brindis-dos-cervezas-2369453.jpg?tf=2048x"
            alt=""
            className="home-img"
          />
          <div className="body">
            <h1>All Beers</h1>
            <p className="grey">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              provident. Libero perspiciatis a vero quis voluptatum dolore unde
              veniam deserunt itaque ex, corporis fuga eos vitae eum quibusdam,
              accusantium ipsa.
            </p>
          </div>
        </Link>
      </div>

      <div className="home-card">
        <Link
          to={"/random-beer"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/cerveza-elle-gourmet-1674419368.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
            alt=""
            className="home-img"
          />
          <div className="body">
            <h1>Random Beer</h1>
            <p className="grey">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              provident. Libero perspiciatis a vero quis voluptatum dolore unde
              veniam deserunt itaque ex, corporis fuga eos vitae eum quibusdam,
              accusantium ipsa.
            </p>
          </div>
        </Link>
      </div>

      <div className="home-card">
        <Link
          to={"/new-beer"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/sirviendo-cerveza-heineken-1643883986.jpg?resize=980:*"
            alt=""
            className="home-img"
          />
          <div className="body">
            <h1>New Beer</h1>
            <p className="grey">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              provident. Libero perspiciatis a vero quis voluptatum dolore unde
              veniam deserunt itaque ex, corporis fuga eos vitae eum quibusdam,
              accusantium ipsa.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
