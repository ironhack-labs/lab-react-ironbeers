import { Link } from "react-router-dom";


function Home (){


    return (
<>
    <Link to ="/beers">All Beers</Link>
     <Link to ="/randombeer">Random Beer</Link>
     <Link to ="/newbeer">Add your Beer</Link>

     </>

)
}



export default Home