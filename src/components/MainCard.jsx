export default function MainCard(props) {
  return (
    <div>
      <img src={props.Image} alt={props.Title} />
      <a href={props.Link}>
        <h1>{props.Title}</h1>
      </a>
      <p>{props.Paragraph}</p>
    </div>
  );
}
