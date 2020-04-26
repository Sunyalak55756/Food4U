import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          เข้าสู่ระบบ
      </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='ชื่อผู้ใช้งาน' />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='รหัสผ่าน' type='password' />
            <Button color='teal' fluid size='large'>
              เข้าสู่ระบบ
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link to="/register">สมัครสมาชิก</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm
