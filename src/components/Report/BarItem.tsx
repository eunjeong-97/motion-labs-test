import styled from 'styled-components'

type PropType = {
  spaceHeight: number
  barHeight: number
  period: number
  startDate: string
}

type BarType = {
  height: number
}

const BarItem = ({ spaceHeight, barHeight, period, startDate }: PropType) => {
  return (
    <BarItemBox>
      <EmptySpace height={spaceHeight} />
      <BarSpace height={barHeight}>
        <PeriodBox>{period}일</PeriodBox>
      </BarSpace>
      <DateText>{startDate}</DateText>
    </BarItemBox>
  )
}

const BarItemBox = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 0 auto;
  padding: 0 30px;
`

const EmptySpace = styled.div<BarType>`
  width: 30px;
  height: ${props => props.height}px;
  background-color: white;
`

const BarSpace = styled.div<BarType>`
  width: 30px;
  height: ${props => props.height}px;
  border-radius: 10px;
  background-color: rgb(51, 51, 51);
  margin-bottom: 5px;
`

const PeriodBox = styled.div`
  margin-top: -20px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: rgb(85, 85, 85);
`

const DateText = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 600;
  color: rgb(85, 85, 85);
`

export default BarItem
