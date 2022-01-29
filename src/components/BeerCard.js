import classes from './BeerDetails.module.css';

const BeerCard = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.beer?.image_url} alt={props.beer?.name} />
      <h2>{props.beer?.name}</h2>
      <p>{props.beer?.tagline}</p>
      <p>{props.beer?.first_brewed}</p>
      <p>{props.beer?.attenuation_level}</p>
      <p>{props.beer?.description}</p>
      <p>{props.beer?.contributed_by}</p>
    </div>
  );
};

export default BeerCard;
