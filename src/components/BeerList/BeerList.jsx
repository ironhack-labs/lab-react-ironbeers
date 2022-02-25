const BeerList = ({ beers }) => {

    return (
        <div>
            {beers.map((beer) => {

                return (
                    <div>
                        key = {beer._id}
                        Name = {beer.name}
                        Image = {beer.image_url}
                        Tagline = {beer.tagline}
                        Contributed = {beer.contributed_by}
                    </div>

                )
            })
            }
        </div>
    )
}

export default BeerList