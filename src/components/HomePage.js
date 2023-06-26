import imgList from '../assets/beers.png'
import imgRandom from '../assets/random-beer.png'
import imgCreate from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

function HomePage(){

    return(
        <div className='h-[100vh] bg-slate-900'>
            <div>
                <Link to='/beers'><img src={imgList}/></Link>
                <h1>All Beer</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
            </div>

            <div>
                <Link to='/randomBeer'><img src={imgRandom}/></Link>  
                <h1>Random Beer</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
            </div>

            <div>
                <Link to='/create'><img src={imgCreate}/></Link> 
                <h1>Create Beer</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
            </div>
        </div>
    )
}
export default HomePage