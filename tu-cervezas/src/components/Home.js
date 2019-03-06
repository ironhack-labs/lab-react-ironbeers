import React from 'react';
import HomeItem from './HomeItem'

const Home = () =>{
    const headers = ["All Beers", "Random Beer", "New Beer"]
    const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAreF4a2M4dG51om4uKG9ziFj5g-DPbvkJFQ37TaV1koQGSgPI","https://www.abc.net.au/news/image/9680296-3x2-700x467.jpg", "http://www.thedrinksreport.com/media/news/2015/16392-540x335.jpg"]
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at mauris sed ante pulvinar vulputate facilisis et dui. Ut et lobortis enim, in ornare tortor. " 
    return (<main className = "home">
        {headers.map((el,i)=> <HomeItem key={i} header = {el} image = {images[i]} text = {lorem}/>)}
        </main>
    )
}

export default Home