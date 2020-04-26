import React from 'react'
import HeaderMenu from './HeaderMenu'
import {
  Container,
  Card
} from 'semantic-ui-react'

const Foods = () => {
  return (
    <div>
      <HeaderMenu />
      <Container text style={{ marginTop: '7em' }}>
        <Card.Group itemsPerRow={4}>
          <Card color='red' />
          <Card color='orange' />
          <Card color='yellow' />
          <Card color='olive' />
          <Card color='green' />
          <Card color='teal' />
          <Card color='blue' />
          <Card color='violet' />
          <Card color='purple' />
          <Card color='pink' />
          <Card color='brown' />
          <Card color='grey' />
        </Card.Group>
      </Container>
    </div>
  )
}

export default Foods
