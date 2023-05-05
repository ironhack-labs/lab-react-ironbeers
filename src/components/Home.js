import { Link } from 'react-router-dom'

function Home(){
  return(
    <nav>
      <Link to='/beers'>Beers</Link>
      <Link to='/random-beer'>Random</Link>
      <Link to='/new-beer'>New Beer</Link>
    </nav>
  )
}
export default Home