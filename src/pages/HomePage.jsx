import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="d-flex justify-content-start">
        <Link to={'/beers'} type="button" className="btn btn-primary mx-2">All Beers</Link>
        <Link to={'/random-beer'} type="button" className="btn btn-primary mx-2">Random Beer</Link>
        <Link to={'/new-beer'} type="button" className="btn btn-primary mx-2">New Beer</Link>
    </div>
  )
}

export default HomePage