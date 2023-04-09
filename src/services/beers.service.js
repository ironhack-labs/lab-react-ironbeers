import http from "./base-api";

const list = () => http.get('/beers')
  .then((res) => res.data.map((b) => (
    {
      image: b.image_url,
      id: b._id,
      name: b.name,
      tagline: b.tagline,
      contributedBy: b.contributed_by
    }
  )))

const detail = (id) => http.get(`/beers/${id}`)
  .then((res) =>  (
      {
        image: res.data.image_url,
        id: res.data._id,
        name: res.data.name,
        tagline: res.data.tagline,
        firstBrewed: res.data.first_brewed,
        attenuationLevel: res.data.attenuation_level,
        description: res.data.description,
        contributedBy: res.data.contributed_by
      }
    ))

const service = {
  list,
  detail
}

export default service