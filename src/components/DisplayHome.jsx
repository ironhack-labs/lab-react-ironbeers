

const DisplayHome = (props) => {
  return (
    <div className="homeCard">
        <img src={props.src} alt="altImg"/>
        <h1>{props.title}</h1>
        <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec magna eget elit convallis congue. Etiam vitae ipsum tempor, ornare nisi condimentum, elementum nisl.</article>
    </div>
  )
}

export default DisplayHome