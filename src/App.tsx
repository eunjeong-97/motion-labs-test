import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/Header'
import Welcome from './pages/Welcome'
import Report from './pages/Report'
import Passenger from './pages/Passenger'

function App () {
  return (
    <BodyBox>
      <PageBox>
        <Router basename="/motion-labs-test">
          <Header />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/report" element={<Report />} />
            <Route path="/passenger" element={<Passenger />} />
          </Routes>
        </Router>
      </PageBox>
    </BodyBox>
  )
}

const BodyBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f3f9;
`

const PageBox = styled.div`
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  margin: 0px auto;
  background-color: white;
`

export default App
