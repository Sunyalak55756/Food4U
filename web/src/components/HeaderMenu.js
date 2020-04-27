import React, { useState } from 'react'
import {
  Container,
  Menu,
  Icon,
  Modal,
} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { removeToken } from '../utils'
import ModelCart from './ModelCart'

const HeaderMenu = ({ cart }) => {
  const history = useHistory()
  const _logout = () => {
    removeToken()
    history.push('/')
  }
  return (
    <>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a'>อาหาร</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>name</Menu.Item>
            <Modal trigger={<Menu.Item>
              <Icon name='shopping cart' size='small' />
              {cart.map(n => n.number).reduce((a, b) => a + b, 0)}
            </Menu.Item>}>
              <ModelCart cart={cart} />
            </Modal>
            <Menu.Item onClick={_logout} as='a'>ออกจากระบบ</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  )
}

export default HeaderMenu