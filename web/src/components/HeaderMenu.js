import React from 'react'
import {
  Container,
  Menu
} from 'semantic-ui-react'

const HeaderMenu = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a'>หน้าแรก</Menu.Item>
      <Menu.Item position='right' as='a'>ออกจากระบบ</Menu.Item>
    </Container>
  </Menu>
)

export default HeaderMenu