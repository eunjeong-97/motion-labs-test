import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()

  return <div className="Welcome">
    <h1>버튼을 눌러 이동해주세요</h1>
    <button onClick={() => { navigate('/report') }}>Report</button>
    <button onClick={() => { navigate('/passenger') }}>Passenger</button>
  </div>
}

export default Welcome
