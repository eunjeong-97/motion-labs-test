import React from 'react'
import styled from 'styled-components'

import Svg from './Svg'

import { ReportListType } from '../propType'

type CycleBoxType = {
  top: number
  left: number
}

const LineChart: React.FC<ReportListType> = function ({ dataList }) {
  return (
    <LineChartBox>
      <Svg dataList={dataList} />
      {dataList.map((dataitem, index) => {
        return (
          <CycleBox
            top={130 - dataitem.cycle}
            left={80 + 93 * index}
            key={index}
          >
            {dataitem.cycle}일
          </CycleBox>
        )
      })}
    </LineChartBox>
  )
}

const LineChartBox = styled.div`
  position: relative;
  cursor: default;
`

const CycleBox = styled.div<CycleBoxType>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  font-weight: bold;
  font-size: 12px;
  color: rgb(112, 112, 112);
  &:last-child {
    color: tomato;
  }
`
export default LineChart
