import { Link } from 'react-router-dom'


function HomePage() {
  return (

    <div className="container flex flex-col items-center justify-center h-full w-full overflow-y-hidden fixed">

      <Link to="/beers">
        <div className="w-full h-full -mt-8 mb-6">
          <div className="w-3/4 h-40 rounded-3xl mx-auto">
            <img className="object-cover h-full w-full rounded-3xl" src="../assets/beers.png" alt="" />
          </div>
          <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 pl-12 mt-2 ">All Beers</h2>
        </div>
      </Link>

      <Link to="/new-beer">
        <div className="w-full h-full mt-4 mb-6">
          <div className="w-3/4 h-40 rounded-3xl mx-auto">
            <img className="object-cover h-full w-full rounded-3xl" src="../assets/new-beer.png" alt="" />
          </div>
          <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 pl-12 mt-2">New Beer</h2>
        </div>
      </Link>

      <Link to="/random-beer">
        <div className="w-full h-full mt-4">
          <div className="w-3/4 h-40 rounded-3xl mx-auto">
            <img className="object-cover h-full w-full rounded-3xl" src="../assets/random-beer.png" alt="" />
          </div>
          <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 pl-12 mt-2">Random Beer</h2>
        </div>
      </Link>
    </div>
  )
}

export default HomePage