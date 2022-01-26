import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderBox>
      <Link href="/">Motionlabs</Link>
    </HeaderBox>
  )
}

const HeaderBox = styled.h2`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0px 20px;
  margin: 0;
  box-sizing: border-box;
  background-color: black;
  color: white;
`

const Link = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: #0700ee;
`

export default Header
