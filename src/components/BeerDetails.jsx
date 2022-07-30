import { useEffect, useState } from 'react'
import Loading from 'react-loading'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getOneBeer } from '../api/beers'
import useRandomBeer from '../hooks/useRandomBeer'
import Header from './Header'

const BeerDetails = () => {
  const [beer, setBeer] = useState()
  const { id } = useParams()
  const { isLoading, random } = useRandomBeer()

  const fetchBeerDetails = async () => {
    try {
      const res = await getOneBeer(id)
      setBeer(res.data)
    } catch (e) {
      console.log('Error fetching beer details', e)
    }
  }

  useEffect(() => {
    id ? setBeer(fetchBeerDetails()) : setBeer(random)
    console.log('The beer: ', beer)
  }, [id, random])

  return (
    <>
      <Header />
      <Wrapper>
        {isLoading ? (
          <Loading type="spin" color="#3dc4fc" width="20%" />
        ) : (
          <>
            <img src={beer?.image_url} alt={beer?.name} />
            <Info>
              <table>
                <tbody>
                  <tr>
                    <LeftCol>
                      <h1>{beer?.name}</h1>
                    </LeftCol>
                    <RightCol>
                      <h1 style={{ color: '#999' }}>
                        {beer?.attenuation_level}
                      </h1>
                    </RightCol>
                  </tr>
                  <tr>
                    <LeftCol>
                      <Tag>
                        <h2>{beer?.tagline}</h2>
                      </Tag>
                    </LeftCol>
                    <RightCol>
                      <h2>{beer?.first_brewed}</h2>
                    </RightCol>
                  </tr>
                </tbody>
              </table>
              <Description>{beer.description}</Description>
            </Info>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default BeerDetails

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-height: 300px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    font-size: 80%;
    img {
      max-height: 200px;
    }
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  @media (max-width: 700px) {
    margin: 0 3%;
  }
`
const Tag = styled.p`
  color: #999;
`
const LeftCol = styled.td`
  padding-right: 30px;
`
const RightCol = styled.td`
  text-align: end;
`
const Description = styled.article`
  max-width: 700px;
`
