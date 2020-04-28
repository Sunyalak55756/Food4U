import React, { useState, useEffect } from 'react'
import HeaderMenu from './HeaderMenu'
import {
  Container,
  Card,
  Image,
  Button,
  Header,
  Input
} from 'semantic-ui-react'
import axios from 'axios'
import { getToken } from '../utils'
import './Foods.css'
import conf from '../config'

const Foods = () => {
  const [cart, setCart] = useState([])
  const [foods, setFoods] = useState({})
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get(`${conf}/foods`,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${getToken()}`
        }
      }).then(res => setFoods(res.data))
  }, [])
  const _minus = (food) => {
    if (!food.number) {
      food.number = 0
    } else {
      food.number--
    }
    setFoods([...foods, food])
  }
  const _plus = (food) => {
    if (!food.number) {
      food.number = 1
    } else {
      food.number++
    }
    setFoods([...foods, food])
  }
  const orderCart = (food) => {
    const order = { ...food }
    if (order.number > 0) {
      setCart([...cart, { img: order.img, number: order.number, name: order.name, foods_id: order.id, price: order.price * order.number }])
      food.number = 0
      setFoods([...foods, food])
    }
  }
  let itemsPerRow = 4
  if (document.body.clientWidth > 991) {
    itemsPerRow = 4
  } else if (document.body.clientWidth < 992 && document.body.clientWidth > 600) {
    itemsPerRow = 3
  } else if (document.body.clientWidth < 601 && document.body.clientWidth > 350) {
    itemsPerRow = 2
  } else if (document.body.clientWidth < 351) {
    itemsPerRow = 1
  }
  console.log(document.body.clientWidth)
  return (
    <div>
      <HeaderMenu cart={cart} />
      <Container text style={{ marginTop: '7em', maxwidth: '100%' }}>
        <Header size='huge'>สั่งอาหาร</Header>
        <Card.Group itemsPerRow={itemsPerRow}>
          {foods && foods.length && foods.map((food) => <Card color='red'>
            {(() => {
              try {
                return <Image src={require(`../assets/images/${food.img}`)} size='small' />
              } catch (err) {
                return <Image src={require(`../assets/images/image.png`)} size='small' />
              }
            })()}
            <div className='info-food'>
              <div className='name'>
                {food.name}
              </div>
              <div className='price'>
                {food.price}
              </div>
            </div>
            <div className='info-order'>
              <div className='minus'>
                <Button color='red' onClick={() => _minus(food)}>-</Button>
              </div>
              <div className='number'>
                <Input value={food.number || 0} />
              </div>
              <div className='plus' onClick={() => _plus(food)}>
                <Button color='green'>+</Button>
              </div>
            </div>
            <Button onClick={() => orderCart(food)} color='blue'>ซื้อ</Button>
          </Card>)}
        </Card.Group>
      </Container>
    </div>
  )
}

export default Foods
