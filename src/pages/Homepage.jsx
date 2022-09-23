
import {Link} from 'react-router-dom'


export default function Homepage(props) {
  return (
    <div className="main-container">
      <div className="homepage-links">
        <Link to={'/beers'}>All beers</Link>
        <Link to={'/random-beer'}>Random beer</Link>
        <Link to={'/new-beer'}>New beer</Link>
      </div>
    </div>
  )
}