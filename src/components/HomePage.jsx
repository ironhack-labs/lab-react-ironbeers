import styled from 'styled-components'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

const HomePage = () => {
  return (
    <Wrapper>
      <HomeElement>
        <img src={beers} alt="beers" />
        <div>
          <h2>All Beers</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam
            cum cupiditate, error amet qui porro eaque, molestiae quasi corporis
            dolore id ad, dolorum animi blanditiis dolor ut! Eum, nobis!
          </p>
        </div>
      </HomeElement>
      <HomeElement>
        <img src={randomBeer} alt="beers" />
        <div>
          <h2>Random Beer</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam
            cum cupiditate, error amet qui porro eaque, molestiae quasi corporis
            dolore id ad, dolorum animi blanditiis dolor ut! Eum, nobis!
          </p>
        </div>
      </HomeElement>
      <HomeElement>
        <img src={newBeer} alt="beers" />
        <div>
          <h2>New Beer</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam
            cum cupiditate, error amet qui porro eaque, molestiae quasi corporis
            dolore id ad, dolorum animi blanditiis dolor ut! Eum, nobis!
          </p>
        </div>
      </HomeElement>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div > div {
    padding: 0 5%;
  }

  @media (max-width: 700px) {
    align-items: flex-start;
    font-size: 80%;
    img {
      width: 100vw;
    }
  }
`
const HomeElement = styled.div`
  max-width: 700px;
  margin-bottom: 2rem;
`
