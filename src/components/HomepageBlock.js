function HomepageBlock({ img, headline, link }) {
  console.log(img, headline);
  return (
    <div>
      <img src={img} alt={headline} />
      <div className="textPart">
        <h2>{headline}</h2>
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
