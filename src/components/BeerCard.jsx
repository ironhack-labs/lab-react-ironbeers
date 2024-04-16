

function BeerCard({ image_url, _id, name, tagline, contributed_by }) {
  const contributedBy = contributed_by.replace(/<.*?>/g, '')

  return (
    <>
      <div className="max-w-96 hover:animate-pulse">
        <a href={`/beers/${_id}`} className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-96 h-96">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image_url} alt="Beer image" style={{maxHeight: '150px', objectFit: 'contain'}}/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tagline}</p>
              <p className="mb-3 font-normal text-gray-700"><b>Contributed by: </b>{contributedBy}</p>
          </div>
        </a>
      </div>
    </>
  )
}

export default BeerCard;