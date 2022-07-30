import Loading from 'react-loading'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useBeers from '../hooks/useBeers'
import Header from './Header'

const Beers = () => {
  const { isLoading, beers } = useBeers()

  return (
    <>
      <Header></Header>
      <Wrapper isLoading={isLoading}>
        {isLoading ? (
          <Loading type="spin" color="#3dc4fc" width="20%" />
        ) : (
          beers.map((item) => (
            <CustomLink to={`/beers/${item._id}`} key={item._id}>
              <img src={item.image_url} alt={item.name} />
              <Info>
                <h4>{item.name}</h4>
                <Tag>{item.tagline}</Tag>
                <p>
                  <strong>Created by: </strong>
                  {item.contributed_by}
                </p>
              </Info>
            </CustomLink>
          ))
        )}
      </Wrapper>
    </>
  )
}

export default Beers

const Wrapper = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'grid')};
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
`
const CustomLink = styled(Link)`
  text-decoration: none;
  max-width: 400px;
  display: flex;
  align-items: center;
  column-gap: 5%;
  padding: 5% 10%;
  color: black;
  img {
    max-height: 150px;
  }
`
const Info = styled.div``
const Tag = styled.p`
  color: #999;
`
