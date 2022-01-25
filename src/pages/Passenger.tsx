import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Title from '../components/common/Title'
import CardContainer from '../components/Passenger/CardContainer'

import { PassengerItemType } from '../propType'

const passenger: string = process.env.REACT_APP_PASSENGER as string

const Passenger = () => {
  const [dataList, setDataList] = useState<PassengerItemType[]>([])

  const fetchData = () => {
    axios.get(passenger).then(response => setDataList(response.data.data))
  }

  useEffect(fetchData, [])

  return (
    <PassengerBox>
      <Title title="Passenger List" />
      {dataList !== undefined && dataList.map((dataItem, index) => {
        return <CardContainer data={dataItem} key={index} />
      })}
    </PassengerBox>
  )
}

const PassengerBox = styled.div`
  padding: 20px;
`

export default Passenger
