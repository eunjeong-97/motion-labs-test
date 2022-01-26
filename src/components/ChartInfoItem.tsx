import React from 'react'
import styled from 'styled-components'

type PropType = {
  width: string
  text: string
  marginLeft: string
}

type IconPropType = {
  value: number
}

const ChartInfoItem = ({ width, text, marginLeft }: PropType) => {
  return (
    <>
      <Icon value={parseInt(width)} />
      <Text value={parseInt(marginLeft)}>{text}</Text>
    </>
  )
}

const Icon = styled.div<IconPropType>`
  width: ${props => props.value}px;
  height: 7px;
  margin-right: 6px;
  background-color: rgb(34, 34, 34);
  border-radius: 14px;
}`

const Text = styled.span<IconPropType>`
  font-size: 10px;
  margin-right: ${props => props.value || 4}px;
`

export default ChartInfoItem
