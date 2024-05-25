import api, { END_POINT } from '../Utils/api'

console.log(`Connecting to B.E API: ${END_POINT}`);


export const getAll = () => {
    return api.get('/beers')
}

export const getOne = ({_id}) => {
    return api.get(`/beers/${_id}`)
}

export const create = ({name, tagline, descriotion, first_brewed, brewers_tips, attenuation_level, contributed_by, }) => {
    return api.post('/beers/new', {
        name,
        tagline, 
        descriotion, 
        first_brewed, 
        brewers_tips, 
        attenuation_level, 
        contributed_by
    })
}
