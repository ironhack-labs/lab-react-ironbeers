import React  from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
            <div className='container'>

                <Link to = '/beers'>
                    <section>
							<h2>Display beer list</h2>
                    </section>
                </Link>


                <section>
                    <Link to = '/random-beer'>

							<h2>Random Beer!</h2>
                    </Link>
                </section>

                <section>
                    <Link to = '/new-beer'>
							<h2>New Beer</h2>
                    </Link>
                </section>


            </div>
    )

}


export default Home