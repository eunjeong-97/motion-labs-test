import React, { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Title from '../components/Title'

const passenger: string = process.env.REACT_APP_PASSENGER as string

const fetchData = () => {
  axios.get(passenger).then(response => console.log(response))
}

const Passenger = () => {
  useEffect(fetchData, [])

  return (
    <PassengerBox>
      <Title title="Passenger List" />
    </PassengerBox>
  )
}

const PassengerBox = styled.div`
  padding: 20px;
`

export default Passenger
