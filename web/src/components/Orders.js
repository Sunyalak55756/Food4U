import React, { useState, useEffect } from 'react'
import HeaderMenu from './HeaderMenu'
import {
  Container,
  Card,
  Image,
  Header,
  Table
} from 'semantic-ui-react'
import axios from 'axios'
import { getToken } from '../utils'
import './Orders.css'

const Orders = () => {
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState({})
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get('http://localhost:5000/api/orders',
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
        {orders && orders.length ?
          <>{orders.map((order) => <Table basic='very'>
            <Table.Body>
              <Table.Row>
                <Table.Cell>หมายเลขการสั่งอาหาร: {order.id}</Table.Cell>
                <Table.Cell>สถานที่จัดส่ง: {order.localtion}</Table.Cell>
                <Table.Cell>ราคารวม: {order.total_price}</Table.Cell>
              </Table.Row>
              {order.lists && order.lists.map((list) =>
                <Table.Row>
                  <Table.Cell className='name'> - {list.food.name}</Table.Cell>
                  <Table.Cell>{list.number}</Table.Cell>
                  <Table.Cell>{list.price}</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
          )}</>
          : <>ไม่มีรายการอาหารที่สั่ง</>
        }

      </Container >
    </div >
  )
}

export default Orders
