import Beers from '../assets/beers.png'
import RandomBeer from '../assets/random-beer.png'
import NewBeer from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div id='home'>
            <section>
                <Link to="/beers">
                    <img src={Beers} alt="Beers" />
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, doloribus voluptatibus autem sunt modi itaque numquam! Vitae neque officia sed distinctio similique vero nam obcaecati. Amet culpa adipisci dolor dolore?</p>
                </Link>
            </section>
            <section>
                <Link to="/random-beers">
                    <img src={RandomBeer} alt="Random Beer" />
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ducimus molestias voluptate similique architecto quo facere, recusandae quos. Quas, mollitia repellat rerum numquam nobis nesciunt excepturi. Obcaecati, blanditiis? Suscipit, consequuntur!</p>
                </Link>
            </section>
            <section>
                <Link to="/new-beer">
                    <img src={NewBeer} alt="New Beer" />
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae qui quae obcaecati voluptatem ipsa accusamus libero reprehenderit error culpa illo nemo odio unde dolore dolores cupiditate delectus, quidem ut.</p>
                </Link>
            </section>
        </div>
    )

}