import { Link } from 'react-router-dom'

function Index() {
    return ( 

        <div className='container'>
            <div className="App">
                <section>
                    <article>
                    <Link to='/beers'>
                        <img src='./img/beers.png' />
                        <h2>All Beers</h2>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum neque, diam maecenas gravida massa mi erat efficitur dignissim. Condimentum congue pharetra fringilla hac fames cursus montes morbi molestie nibh potenti maecenas quisque, class aliquet porta pellentesque dis parturient imperdiet netus luctus aptent nec quis.</p>
                    </article>
                    <article>
                    <Link to='/random-beer'>
                        <img src='./img/random-beer.png' />
                        <h2>Random Beer</h2>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum neque, diam maecenas gravida massa mi erat efficitur dignissim. Condimentum congue pharetra fringilla hac fames cursus montes morbi molestie nibh potenti maecenas quisque, class aliquet porta pellentesque dis parturient imperdiet netus luctus aptent nec quis.</p>
                    </article>
                    <article>
                    <Link to='/new-beer'>
                        <img src='./img/new-beer.png' />
                        <h2>New Beer</h2>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum neque, diam maecenas gravida massa mi erat efficitur dignissim. Condimentum congue pharetra fringilla hac fames cursus montes morbi molestie nibh potenti maecenas quisque, class aliquet porta pellentesque dis parturient imperdiet netus luctus aptent nec quis.</p>
                    </article>
                </section>
            </div>
         </div>
     )
}

export default Index