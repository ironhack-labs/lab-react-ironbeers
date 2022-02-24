import beers from './../assets/beers.png'
import randomBeers from './../assets/random-beer.png'
import newBeers from './../assets/new-beer.png'

const Home = () => {
    return (
        <div>
            <article>
                <img src={beers}></img>
                <h2>All beers</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Velit vero amet, quam repudiandae pariatur fuga accusamus 
                    aspernatur possimus voluptate, veniam cum facere magnam nobis 
                    unde excepturi provident commodi fugiat dolor!
                </p>
            </article>
            <article>
                <img src={randomBeers}></img>
                <h2>Random beer</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Velit vero amet, quam repudiandae pariatur fuga accusamus 
                    aspernatur possimus voluptate, veniam cum facere magnam nobis 
                    unde excepturi provident commodi fugiat dolor!
                </p>
            </article>
            <article>
                <img src={newBeers}></img>
                <h2>New beer</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Velit vero amet, quam repudiandae pariatur fuga accusamus 
                    aspernatur possimus voluptate, veniam cum facere magnam nobis 
                    unde excepturi provident commodi fugiat dolor!
                </p>
            </article>
        </div>
    )
}

export default Home