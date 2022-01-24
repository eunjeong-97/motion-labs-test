import React from 'react'
import styled from 'styled-components'

import Svg from './Svg'

type DataItemType = {
  startDate: string
  endDate: string
  period: number
  cycle: number
}

type PropType = {
  dataList: DataItemType[]
}

const LineChart: React.FC<PropType> = function ({ dataList }) {
  return (
    <LineChartBox>
      <Svg />
      {dataList.map((dataitem, index) => {
        return <CycleBox key={index}>{dataitem.cycle}</CycleBox>
      })}
    </LineChartBox>
  )
}

const LineChartBox = styled.div``

const CycleBox = styled.div``

export default LineChart
