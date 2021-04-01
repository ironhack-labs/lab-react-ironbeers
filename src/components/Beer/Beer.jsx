import React, { useState, useEffect } from 'react'
import { getBeer } from '../../services/BaseService'
import BeerContent from '../BeerContent/BeerContent'

const Beer = (props) => {

    const [beer, setbeer] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getBeer(props.match.params.id).then(res => {
            setbeer(res)
            setLoading(false)
        })
    }, [props.match.params.id])

    return (
        <div className="container mt-5">
            { loading
                ?   'Loading...'
                :   <BeerContent {...beer} />
            }
        </div>
    )
}

export default Beer