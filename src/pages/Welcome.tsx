import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Welcome = () => {
  const navigate = useNavigate()

  return <WelcomeBox>
    <h1>버튼을 눌러 이동해주세요</h1>
    <button onClick={() => { navigate('/report') }}>Report</button>
    <button onClick={() => { navigate('/passenger') }}>Passenger</button>
  </WelcomeBox>
}

const WelcomeBox = styled.div`
  padding: 20px;
`

export default Welcome
