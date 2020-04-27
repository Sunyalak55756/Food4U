import React from 'react'
import HeaderMenu from './HeaderMenu'
import {
  Container,
  Card,
  Image,
  Button,
  Header
} from 'semantic-ui-react'
import useAxios from 'axios-hooks'
import { getToken } from '../utils'
import './Foods.css'

const Foods = () => {
  const [{ data: foods, loading, error }] = useAxios({
    url: 'http://localhost:5000/api/foods',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${getToken()}`
    }
  })
  return (
    <div>
      <HeaderMenu />
      <Container text style={{ marginTop: '7em', maxwidth: '100%' }}>
        <Header size='huge'>สั่งอาหาร</Header>
        <Card.Group itemsPerRow={4}>
          {foods && foods.length && foods.map((food) => <Card color='red'>
            <Image src={require(`../assets/images/${food.img}`)} size='small' />
            <div className='info-food'>
              <div className='name'>
                {food.name}
              </div>
              <div className='price'>
                {food.price}
              </div>
            </div>
            <Button color='blue'>ซื้อ</Button>
          </Card>)}
        </Card.Group>
      </Container>
    </div>
  )
}

export default Foods
