import ironService from "../../services/beers.service"

const Beer = () => {

    ironService
        .getAllBears()
        .then(data => console.log(data.data))
        .catch(err => console.log(err))

}
export default Beer