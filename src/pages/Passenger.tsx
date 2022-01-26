import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Title from '../components/Title'
import CardContainer from '../components/CardContainer'
import { PassengerItemType } from '../propType'

const passenger: string = process.env.REACT_APP_PASSENGER as string

const Passenger = () => {
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  const wholeHeight = scrollHeight - clientHeight

  const [dataList, setDataList] = useState<PassengerItemType[]>([])
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false)

  const fetchData = () => {
    axios.get(passenger).then(response => setDataList(response.data.data))
  }

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(fetchData, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (scrollPosition < wholeHeight) setIsScrollBottom(false)
    else if (scrollPosition >= wholeHeight) setIsScrollBottom(true)
  }, [scrollPosition, wholeHeight])

  useEffect(() => {
    if (isScrollBottom) {
      axios.get(passenger).then(response => {
        const newArray = []
        newArray.push(dataList)
        newArray.push(response.data.data)
        setDataList(newArray.flat())
      })
    }
  }, [isScrollBottom])

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
