import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Header from '../components/Header'
import Title from '../components/Title'
import ChartInfoItem from '../components/ChartInfoItem'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'

const report: string = process.env.REACT_APP_REPORT as string

type DataItemType = { startDate: string; endDate: string; period: number; cycle: number }

function Report () {
  const [dataList, setDataList] = useState<DataItemType[]>([])
  const fetchData = () => {
    axios.get(report).then(response => {
      setDataList(response.data.data)
    })
  }

  useEffect(fetchData, [])

  return (
    <Outside>
      <PageBox>
        <Header />
        <MainBox>
          <Title title="User Report" />
          <ChartBox>
            <ChartInfo>
              <ChartInfoItem width="7" text="활동 주기" marginLeft="10" />
              <ChartInfoItem
                width="20"
                text="활동 기간, 시작일"
                marginLeft="0"
              />
            </ChartInfo>
            {(dataList !== undefined) && (
              <>
                <LineChart dataList={dataList} />
                <BarChart dataList={dataList} />
              </>
            )}
          </ChartBox>
        </MainBox>
      </PageBox>
    </Outside>
  )
}

const Outside = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f3f9;
`

const PageBox = styled.div`
  max-width: 600px;
  height: 100%;
  min-height: 100vh;
  margin: 0px auto;
  background-color: white;
`

const MainBox = styled.div`
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
