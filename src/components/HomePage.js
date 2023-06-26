import imgList from '../assets/beers.png'
import imgRandom from '../assets/random-beer.png'
import imgCreate from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

function HomePage(){

    return(
        <div className='w-[100vw]'>
            <div>
                <Link to='/beers'><img src={imgList}/></Link>
                <div className='m-5 text-left'>
                    <h1 className='text-2xl '>All Beer</h1>
                    <p className='text-sm leading-none'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
                </div>
            </div>

            <div>
                <Link to='/randomBeer'><img src={imgRandom}/></Link>  
                <div className='m-5 text-left'>
                    <h1 className='text-2xl'>Random Beer</h1>
                    <p className='text-sm leading-none'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
                </div>
            </div>

            <div>
                <Link to='/create'><img src={imgCreate}/></Link> 
                <div className='m-5 text-left'>
                    <h1 className='text-2xl'>Create Beer</h1>
                    <p className='text-sm leading-none'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
                </div>
            </div>
        </div>
    )
}
export default HomePage