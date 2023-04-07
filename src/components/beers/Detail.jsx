const Detail = ({
  image_url,
  name,
  tagline,
  attenuation_level,
  first_brewed,
  description,
  contributed_by,
}) => {
  return (
    <div className="detail-container">
      <div className="img">
        <img src={image_url} alt={name} />
      </div>
      <div className="text">
        <div className="title">
          <div>
            <h1>{name}</h1>
            <h3>{tagline}</h3>
          </div>
          <div>
            <h3>{attenuation_level}</h3>
            <p>{first_brewed}</p>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
          <p>{contributed_by?.split(" ").splice(0, 2).join(" ")}</p>
        </div>
      </div>
    </div>
  );
};
export default Detail;
