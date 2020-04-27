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
import './Orders.css'

const Orders = () => {
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState({})
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get('http://localhost:5000/api/oders',
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${getToken()}`
        }
      }).then(res => setOrders(res.data))
  }, [])
  return (
    <div>
      <HeaderMenu cart={cart} />
      <Container text style={{ marginTop: '7em', maxwidth: '100%' }}>
        <Header size='huge'>รายการอาหารที่สั่ง</Header>
        <Card.Group itemsPerRow={4}>
          {orders && orders.length ?
            <> {orders.map((order) => <Card color='red'>
              {(() => {
                try {
                  return <Image src={require(`../assets/images/${order.img}`)} size='small' />
                } catch (err) {
                  return <Image src={require(`../assets/images/image.png`)} size='small' />
                }
              })()}
              <div className='info-food'>
                <div className='name'>
                  {order.name}
                </div>
                <div className='price'>
                  {order.price}
                </div>
              </div>
            </Card>)}</>
            : <>ไม่มีรายการอาหารที่สั่ง</>
          }
        </Card.Group>
      </Container>
    </div>
  )
}

export default Orders
