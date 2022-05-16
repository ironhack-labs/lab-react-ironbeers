import {Link} from "react-router-dom"

function HomePage(){
    return (
        <div>
            <Link to={"/beers"}>
                <div>
                    <img src="/assets/beers.png" alt="" />
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc interdum nulla eget fringilla venenatis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos. Suspendisse ut condimentum leo. 
                        Nulla ac nisi eget ante imperdiet lacinia in vel ipsum.</p>
                </div>
            </Link>

            <Link to={"/random-beer"}>
                <div>
                    <img src="/assets/random-beer.png" alt="" />
                    <h2>Random Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc interdum nulla eget fringilla venenatis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos. Suspendisse ut condimentum leo. 
                        Nulla ac nisi eget ante imperdiet lacinia in vel ipsum.</p>
                </div>
            </Link>

            <Link to={"/new-beer"}>
                <div>
                    <img src="/assets/new-beer.png" alt="" />
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc interdum nulla eget fringilla venenatis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos. Suspendisse ut condimentum leo. 
                        Nulla ac nisi eget ante imperdiet lacinia in vel ipsum.</p>
                </div>
            </Link>
            
        </div>
    )
}

export default HomePage