import React, { useEffect } from 'react'
import axios from 'axios'

const passenger: string = process.env.REACT_APP_PASSENGER as string

const fetchData = () => {
  axios.get(passenger).then(response => console.log(response))
}

const Passenger = () => {
  useEffect(fetchData, [])

  return <div className="Passenger">Passenger</div>
}

export default Passenger
