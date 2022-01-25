import React from 'react'
import styled from 'styled-components'

import { PassengerItemType } from '../../propType'

type CardPropType = {
  data: PassengerItemType
}

const CardContainer: React.FC<CardPropType> = function ({ data }) {
  const { airline, name, trips, _id } = data
  const { logo, slogan } = airline[0]

  return (
    <CardContainerBox>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <TripNumber>{(trips !== null) ? trips : 0} trips</TripNumber>
      </CardHeader>
      <CardMain>
        <MainImage src={logo}></MainImage>
        <MainText>{slogan}</MainText>
      </CardMain>
      <CardBottom>{_id}</CardBottom>
    </CardContainerBox>
  )
}

const CardContainerBox = styled.div`
  background-color: rgb(255, 255, 255);
  padding: 20px 0px;
  border-top: 1px solid rgb(241, 243, 249);
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`

const TripNumber = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: rgb(0, 0, 0);
`

const CardMain = styled.div`
  margin-top: 10px;
  background-color: rgb(242, 242, 242);
  padding: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`

const MainImage = styled.img`
  width: 80px;
`

const MainText = styled.div`
  margin-left: 10px;
  font-size: 14px;
`

const CardBottom = styled.div`
    margin-top: 20px;
    font-size: 12px;
    font-weight: bold;
    color: rgb(211, 211, 211);
    text-align: right;
}`

export default CardContainer
