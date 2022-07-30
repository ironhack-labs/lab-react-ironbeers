import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <HomeIcon fill="white" size="3%" />
      </Link>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  padding: 0.5rem 0;
  text-align: center;
  background-color: #3dc4fc;
  margin-bottom: 2rem;
`
const HomeIcon = styled(AiFillHome)`
  width: 50px;
`
