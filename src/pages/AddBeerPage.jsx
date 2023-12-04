import BeerForm from '../components/BeerForm'
function AddBeerPage() {

    return(
        <div>
            <div className="row mt-5 mb-5">
            <div className="col-md-6 mx-auto d-flex flex-row justify-content-center" style={{}}>
            <h1>Add a beer</h1>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6 mx-auto" style={{}}>
            <BeerForm/>
            </div>
            </div>
        </div>
    )
}

export default AddBeerPage