function OptionCard (props) {

    // console.log('../assets/' + props.img)
    return (
        <div>
            {/* <img src={'../assets/' + props.img} alt=''/> */}
            <img src='../assets/beers.png' alt=''/>
            <h1> {props.option}</h1>
            <p> {props.decription} </p>
        </div>
    )
}

export default OptionCard;