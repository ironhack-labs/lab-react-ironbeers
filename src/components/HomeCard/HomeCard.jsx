import homecard from '../../home-data.json'

function HomeCard(){
    // const {id, title, description, anchor, cover}= homecard;

    return(
        <>
        {homecard.map((card)=>{
            return (
            <div className='card-container' key={card.id}>
                    <img 
                    src={card.cover} 
                    alt={card.title} 
                    style={{ width: 100, height: 100 }}
                    />                <a href={card.anchor}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </a>
            </div>
            );
        })}
        </>
    );
}

export default HomeCard