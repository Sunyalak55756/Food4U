import React, { useState, useEffect } from 'react'
import {
  Container,
  Menu,
  Icon,
  Modal,
} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { removeToken, getUser, removeUser } from '../utils'
import ModalCart from './ModalCart'

const HeaderMenu = ({ cart }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    setUser(JSON.parse(getUser()))
  }, [])
  const history = useHistory()
  const _logout = () => {
    removeToken()
    removeUser()
    history.push('/')
  }
  return (
    <>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item onClick={() => history.push('/')}>อาหาร</Menu.Item>
          <Menu.Item onClick={() => history.push('/orders')}>ประวัติ</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>{user?.user_name || 'name'}</Menu.Item>
            <Modal trigger={<Menu.Item>
              <Icon name='shopping cart' size='small' />
              {cart.length && cart.map(n => n.number).reduce((a, b) => a + b, 0)}
            </Menu.Item>}>
              <ModalCart cart={cart} />
            </Modal>
            <Menu.Item onClick={_logout} as='a'><Icon name='sign-out' /></Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  )
}

export default HeaderMenu