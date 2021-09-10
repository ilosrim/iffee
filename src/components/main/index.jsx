import React from 'react'
import { Body } from '../body'
import { Sidebar } from '../sidebar'
import { Container } from '../styles/style'

export const Main = () => {
  return (
    <Container>
      <Sidebar />
      <Body />
    </Container>
  )
}
