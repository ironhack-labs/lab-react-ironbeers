const Card = ({ img, title, tagline }) => {
  return (
    <div className="card m-auto mb-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="Beers" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {tagline ? tagline : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sem leo, consequat eu diam et, commodo posuere eros. Etiam lacinia magna venenatis vestibulum aliquet"}
        </p>
      </div>
    </div>
  );
};

export default Card;
