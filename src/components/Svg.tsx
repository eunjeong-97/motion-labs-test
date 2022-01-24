import React from 'react'
import styled from 'styled-components'

type DataItemType = {
  startDate: string
  endDate: string
  period: number
  cycle: number
}

type PropType = {
  dataList: DataItemType[]
}

const Svg: React.FC<PropType> = function ({ dataList }) {
  const cycleArray: number[] = []
  dataList.map(dataItem => {
    cycleArray.push(dataItem.cycle)
    return cycleArray
  })
  console.log(cycleArray)
  return (
    <SvgBox>
      {dataList.map((dataItem, index) => {
        const left = 80 + 93 * index
        const nextLeft = 80 + 93 * (index + 1)
        const top = 160 - dataItem.cycle
        console.log(160 - cycleArray[index + 1])
        return (
          <Line
            key={index}
            x1={left + 13}
            x2={nextLeft + 11}
            y1={top}
            y2={160 - cycleArray[index + 1]}
          />
        )
      })}

      {dataList.map((dataItem, index) => {
        const left = 80 + 93 * index
        return <Circle key={index} cx={left + 11} cy={160 - dataItem.cycle} />
      })}
    </SvgBox>
  )
}

const SvgBox = styled.svg`
  width: 100%;
  height: 160px;
`

const Circle = styled.circle`
  cx: ${props => props.cx};
  cy: ${props => props.cy};
  r: 4.5;
  fill: #222;
`

const Line = styled.line`
  x1: ${props => props.x1};
  x2: ${props => props.x2};
  y1: ${props => props.y1};
  y2: ${props => props.y2};
  stroke: rgb(34, 34, 34);
  stroke-width: 2;
  &:nth-child(5) {
    display: none;
  }
`

export default Svg
