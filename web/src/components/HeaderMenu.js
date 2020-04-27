import React from 'react'
import {
  Container,
  Menu,
  Icon
} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { removeToken } from '../utils'

const HeaderMenu = () => {
  const history = useHistory()
  const _logout = () => {
    removeToken()
    history.push('/')
  }
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a'>อาหาร</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>name</Menu.Item>
          <Menu.Item><Icon name='shopping cart' size='small' /></Menu.Item>
          <Menu.Item onClick={_logout} as='a'>ออกจากระบบ</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default HeaderMenu