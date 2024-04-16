

function BeerCardDetail({ image_url, name, attenuation_level, first_brewed, tagline, description, contributed_by }) {

  return (
    <>
      <section className="d-flex justify-content-center align-items-center my-5">
        <div className="card" style={{width: "30rem"}}>
          <img src={image_url} className="card-img-top mt-3" alt="Beer image" style={{maxHeight: '150px', objectFit: 'contain'}}/>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="card-title">{name}</h2>
              <h3 className="card-title text-secondary">{attenuation_level}</h3>
            </div>

            <div className="d-flex justify-content-between align-items-center my-3">
            <p className="card-text m-0 text-secondary">{tagline}</p>
            <p className="card-text"><b>{first_brewed}</b></p>
            </div>
            <p className="card-text fw-semibold">{description}</p>
            <p className="card-text text-secondary">Contributed by: {contributed_by}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BeerCardDetail;
