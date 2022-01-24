import React from 'react'
import styled from 'styled-components'

import BarItem from './BarItem'

type DataItemType = {
  startDate: string
  endDate: string
  period: number
  cycle: number
}
type PropType = {
  dataList: DataItemType[]
}

const BarChart: React.FC<PropType> = function ({ dataList }) {
  return (
    <BarChartBox>
      {dataList.map((dataItem: DataItemType, index: number) => {
        const periodPersent = Math.round((dataItem.period / 15) * 100)
        const month = dataItem.startDate.substring(5, 7)
        const date = dataItem.startDate.substring(8, 10)
        const transDate = `${month}/${date}`
        return (
          <BarItem
            key={index}
            spaceHeight={100 - periodPersent}
            barHeight={periodPersent}
            period={dataItem.period}
            startDate={transDate}
          ></BarItem>
        )
      })}
    </BarChartBox>
  )
}

const BarChartBox = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 20px 50px;
}`

export default BarChart
