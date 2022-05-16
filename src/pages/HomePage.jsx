import {Link} from "react-router-dom"

function HomePage(){
    return (
        <div className="container ">
            <div className="row d-flex justify-content-center">
                <div className="col-6 ">
            <Link to={"/beers"}>
                <div>
                    <img className="img-fluid" src="/assets/beers.png" alt="" />
                    <h2 className="text-start text-muted text-decoration-none">All Beers</h2>
                    <p className="text-start text-muted text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc interdum nulla eget fringilla venenatis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos. Suspendisse ut condimentum leo. 
                        Nulla ac nisi eget ante imperdiet lacinia in vel ipsum.</p>
                </div>
            </Link>

            <Link to={"/random-beer"}>
                <div>
                    <img className="img-fluid" src="/assets/random-beer.png" alt="" />
                    <h2 className="text-start text-muted text-decoration-none">Random Beer</h2>
                    <p className="text-start text-muted text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc interdum nulla eget fringilla venenatis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos. Suspendisse ut condimentum leo. 
                        Nulla ac nisi eget ante imperdiet lacinia in vel ipsum.</p>
                </div>
            </Link>

            <Link to={"/new-beer"}>
                <div>
                    <img className="img-fluid" src="/assets/new-beer.png" alt="" />
                    <h2 className="text-start text-muted text-decoration-none">New Beer</h2>
                    <p className="text-start text-muted text-decoration-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc interdum nulla eget fringilla venenatis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos. Suspendisse ut condimentum leo. 
                        Nulla ac nisi eget ante imperdiet lacinia in vel ipsum.</p>
                </div>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default HomePage