import styled from 'styled-components'

type PropType = {
  title: string
}

const Title = ({ title }: PropType) => {
  return (
    <TitleBox>
      <h1>{title}</h1>
    </TitleBox>
  )
}

const TitleBox = styled.div`
  margin: 20px 0;
`

export default Title
