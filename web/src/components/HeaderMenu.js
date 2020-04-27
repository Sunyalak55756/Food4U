import React from 'react'
import {
  Container,
  Menu
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
        <Menu.Item as='a'>หน้าแรก</Menu.Item>
        <Menu.Item onClick={_logout} position='right' as='a'>ออกจากระบบ</Menu.Item>
      </Container>
    </Menu>
  )
}

export default HeaderMenu