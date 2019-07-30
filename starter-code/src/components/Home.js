import React from 'react';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className="container">
            <div>
            <img src="../img/beers.png" alt=""/>
                 
                <Link to="/beers"><h1>All the beers</h1></Link>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>

            <div>
                <img src="../img/random-beer.png"alt=""/>
                <Link to="/randombeer"><h1>Random Beer</h1></Link>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

            </div>
            <div>
                <img src="../img/new-beer.png"alt=""/>
                <Link to="/newbeer"><h1>New Beer</h1></Link>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

            </div>

        </div>
        // <div className="container">
        //     <Link to={`/`}>
        //     <nav>Home</nav>
        //     </Link>
        //         <div>
        //         <Link to = "/beers" style = {{textDecoration: 'none'}}>
        //         {/* <Link to = "/beers" style={{ textDecoration: 'none' }}> */}
        //             {/* <Route exact path="/beers" render ={(props)=> <Beers/>} /> */}
                    
        //         <img src="../img/beers.png" alt=""/>
        //             <h1>All Beers</h1>
        //             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        //             {/* </Link> */}
        //             </Link>





        //             </div>
        //         <div>
        //         <img src="../img/random-beer.png" alt=""/>
        //         <h1>Random Beer</h1>
        //             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            
        //         {/* <NavLink><Route exact path="/random-beer" render ={(props)=> <RandomBeer/>} /></NavLink> */}
        //         </div>
        //         <div>
        //             <img src="../img/new-beer.png" alt=""/>
        //             <h1>New Beer</h1>
        //             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

        
        //             {/* <NavLink><Route exact path="/new-beer" render ={(props)=> <NewBeer/>} /></NavLink> */}

                
        //         </div>
        // </div>
    )
}

export default Home;