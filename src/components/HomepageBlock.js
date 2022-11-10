import { Link } from "react-router-dom";

function HomepageBlock({ img, headline, link }) {
  return (
    <div>
      <img src={img} alt={headline} />
      <div className="textPart">
        <Link to={link} className="linkFromHome">{headline}</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          quam et nulla malesuada, a lacinia lectus placerat. Aliquam vehicula,
          risus eget imperdiet fermentum, orci quam euismod libero, consectetur
          rhoncus erat metus id mi.
        </p>
      </div>
    </div>
  );
}

export default HomepageBlock;
