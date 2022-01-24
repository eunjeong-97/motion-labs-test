import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderBox className="Header">
      <h1>Motionlabs</h1>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
`

export default Header
