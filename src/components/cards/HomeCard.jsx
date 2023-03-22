const HomeCards = ({image, title}) => {
    return (
        <div className="home-card">
            <img src={image} alt={title}/>
            <h3>{ title }</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis aspernatur ipsa at rerum veniam aliquid obcaecati temporibus perspiciatis name.</p>
        </div>
    )
}

export default HomeCards