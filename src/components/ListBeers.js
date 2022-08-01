function ListBeers(props){
    {props.beers.map(element => {
    return(


    <>
    <h2>{element.name}</h2>
    <p> {element.tagline}</p>
    <span> {element.contributed_by}</span>
    <img src={element.image_url}/>
    </>
    )
}
)}
}

export default ListBeers;