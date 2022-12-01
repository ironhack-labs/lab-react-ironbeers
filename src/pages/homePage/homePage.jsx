import allBeers from "../../assets/beers.png"

function HomePage() {
    console.log(allBeers)



    return (
        <div>
            <h1>hola somos home pages</h1>
            <img src={allBeers} alt="" />
        </div>
    )

}

export default HomePage