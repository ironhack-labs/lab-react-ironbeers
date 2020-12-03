import { Link } from 'react-router-dom'

const Home = () => {
    return (
        
        <main>
            <div className="card" >
                <img className="card-img-top" src="https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80" alt="Beer"/>
                <div className="card-body">
                    <Link className="card-title" to={"/beers"}>All Beers</Link>
                    <p className="card-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod orci non tempus commodo. Aliquam semper eget est ullamcorper pulvinar. Nam mollis vitae lorem vel sodales.</p>              
                </div>
            </div>
                
            <div className="card" >
                <img className="card-img-top" src="https://images.unsplash.com/photo-1552668093-24771b985482?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Beer"/>
                <div className="card-body">
                    <Link className="card-title" to={"/beers/random"}>Random Beer</Link>
                    <p className="card-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod orci non tempus commodo. Aliquam semper eget est ullamcorper pulvinar. Nam mollis vitae lorem vel sodales.</p>              
                </div>
            </div>
                    
            <div className="card" >
                <img className="card-img-top" src="https://images.unsplash.com/photo-1474314005122-3c07c4df1224?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" alt="Beer"/>
                <div className="card-body">
                    <Link className="card-title" to={"/new"}>New Beer</Link>
                    <p className="card-text mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod orci non tempus commodo. Aliquam semper eget est ullamcorper pulvinar. Nam mollis vitae lorem vel sodales.</p>              
                </div>
            </div>
        </main>

    )
}

export default Home