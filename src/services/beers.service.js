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
  .then((res) => (
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
const random = () => http.get('/beers/random')
  .then((res) => (
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
const newBeer = (data) => http.post('/beers/new', {
  name: data.name,
  tagline: data.tagline,
  description: data.description,
  first_brewed: data.firstBrewed,
  brewers_tips: data.brewersTips,
  attenuation_level: data.attenuationLevel,
  contributed_by: data.contributedBy
})
  .then((res) => (
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

const filter = (value) => http.get(`/beers/search?q=${value}`)
  .then((res) => res.data.map((b) => (
    {
      image: b.image_url,
      id: b._id,
      name: b.name,
      tagline: b.tagline,
      contributedBy: b.contributed_by
    }
  )))

const service = {
  list,
  detail,
  random,
  newBeer,
  filter
}

export default service