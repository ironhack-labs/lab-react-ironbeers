import { Link } from "react-router-dom"


function HomePage() {
  return (
    <div className="buttonContainer">
        <Link to='/beers'><button>All Bears</button></Link>
        <Link to='/random-beer'><button>Random Beer</button></Link>
        <Link to='/new-beer'><button>New Beer</button></Link>
    </div>
  )
}

export default HomePage
