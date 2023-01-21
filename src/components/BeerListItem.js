export default function BeerListItem({ data }) {
    let { image_url, name, tagline, contributed_by } = data;
    return (
        <div className="card">
            <img src={image_url} alt={name} width='100px'/>
            <div>
                <div>{name}</div>
                <div>{tagline}</div>
                <div>Created by: {contributed_by}</div>
            </div>

        </div>
    )
    
}