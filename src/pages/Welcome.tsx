import React from 'react'
import styled from 'styled-components'

const Welcome = () => {
  return (
    <WelcomeBox>
      <PageList>
        <PageItem>
          <a href="/report">
            <Text>레포트</Text>
          </a>
        </PageItem>
        <PageItem>
          <a href="/passenger">
            <Text>승객목록</Text>
          </a>
        </PageItem>
      </PageList>
    </WelcomeBox>
  )
}

const WelcomeBox = styled.div`
  padding: 20px;
`

const PageList = styled.ul``

const PageItem = styled.li`
  margin: 40px 0px;
`

const Text = styled.span`
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: blue;
`

export default Welcome
