import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Title from '../components/common/Title'
import ChartInfoItem from '../components/Report/ChartInfoItem'
import LineChart from '../components/Report/LineChart'
import BarChart from '../components/Report/BarChart'

import { ReportItemType } from '../propType'

const report: string = process.env.REACT_APP_REPORT as string

function Report () {
  const [dataList, setDataList] = useState<ReportItemType[]>([])

  const fetchData = () => {
    axios.get(report).then(response => setDataList(response.data.data))
  }

  useEffect(fetchData, [])

  return (
    <ReportBox>
      <Title title="User Report" />
      <ChartBox>
        <ChartInfo>
          <ChartInfoItem width="7" text="활동 주기" marginLeft="10" />
          <ChartInfoItem width="20" text="활동 기간, 시작일" marginLeft="0" />
        </ChartInfo>
        {dataList !== undefined && (
          <>
            <LineChart dataList={dataList} />
            <BarChart dataList={dataList} />
          </>
        )}
      </ChartBox>
    </ReportBox>
  )
}

const ReportBox = styled.div`
  padding: 20px;
`

const ChartBox = styled.div`
  border: 1px solid rgb(234, 234, 234);
  border-radius: 10px;
`

const ChartInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`

export default Report
