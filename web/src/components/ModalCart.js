import React, { useState } from 'react'
import {
  Modal,
  Button,
  Form,
  TextArea,
  Image,
  Table
} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import './ModalCart.css'
import axios from 'axios'
import { getToken } from '../utils'

const ModalCart = ({ cart }) => {
  const history = useHistory()
  const [localtion, setLocaltion] = useState('')
  const _onSubnmit = () => {
    axios.post(`${conf}/orders`,
      {
        localtion: localtion,
        total_price: cart.map((item) => item.number * item.price).reduce((a, b) => a + b),
        foods: cart
      }, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${getToken()}`
      }
    }).then(res => history.push('/orders'))
  }
  return (
    <>
      <Modal.Header>สั่งอาหาร</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {(() => {
            if (cart.length > 0) {
              return <>
                <Table basic='very'>
                  <Table.Body>
                    {cart.map(ca =>
                      <Table.Row>
                        <Table.Cell>
                          {(() => {
                            try {
                              return <Image size='tiny' src={require(`../assets/images/${ca.img}`)} />
                            } catch (err) {
                              return <Image size='tiny' src={require(`../assets/images/image.png`)} />
                            }
                          })()}
                        </Table.Cell>
                        <Table.Cell>{ca.name}</Table.Cell>
                        <Table.Cell>{ca.price}</Table.Cell>
                        <Table.Cell>{ca.number}</Table.Cell>
                        <Table.Cell>{ca.price * ca.number}</Table.Cell>
                      </Table.Row>
                    )}
                  </Table.Body>
                </Table>
                <Form size='large'>
                  <TextArea onChange={(e) => setLocaltion(e.target.value)} placeholder='สถานที่จัดส่ง' />
                  <Button className='btn-post' onClick={_onSubnmit} color='teal' fluid size='large'>
                    สั่ง
                  </Button>
                </Form>
              </>
            } else {
              return <>ไม่มีรายการ</>
            }
          })()}
        </Modal.Description>
      </Modal.Content>
    </>
  )
}

export default ModalCart