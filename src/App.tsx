import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Report from './pages/Report'
import Passenger from './pages/Passenger'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/report" element={<Report/>} />
        <Route path="/passenger" element={<Passenger />} />
      </Routes>
    </Router>
  )
}

export default App
