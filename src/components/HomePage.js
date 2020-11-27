import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
        return (
        <div style={{ width: '375px', textDecoration:'none'}}>
         <Link to={'/beers'} style={{textDecoration:'none'}}>
            <div>
                <img alt="all-beers" src="../p1.png" style={{ width: '375px'}}/>
                <div style={{ margin: ' 3px 15px 3px 15px' }}>
                    <h1> All Beers</h1>
                    <p > Do laboris fugiat officia amet dolor elit ullamco non labore exercitation 
                    ea dolor. Dolor dolore velit veniam ad in laborum labore cupidatat exercitation 
                    sit minim enim Lorem. 
                    </p>
                </div> 
            </div>
            </Link>

            <Link to={'/random-beer'} style={{textDecoration:'none'}}>
            <div>
                <img alt="all-beers" src="../random.png" style={{ width: '375px'}}/>
                <div style={{ margin: ' 3px 15px 3px 15px' }}>
                    <h1> Random Beer</h1>
                    <p > Do laboris fugiat officia amet dolor elit ullamco non labore exercitation 
                    ea dolor. Dolor dolore. Do laboris fugiat officia amet dolor elit ullamco non labore exercitation 
                    ea dolor.  
                    </p>
                </div> 
             </div> 
            </Link>


            <Link to={'/new-beer'} style={{textDecoration:'none'}}>
            <div>
                <img alt="all-beers" src="../new.png" style={{ width: '375px'}}/>
                <div style={{ margin: ' 3px 15px 3px 15px' }}>
                    <h1> New Beer</h1>
                    <p > Do laboris fugiat officia amet dolor elit ullamco non labore exercitation 
                    ea dolor. Dolor dolore velit veniam ad in laborum labore cupidatat exercitation 
                    sit minim enim Lorem. 
                    </p>
                </div> 
            </div>
            </Link> 
        </div>
    )
}

export default HomePage