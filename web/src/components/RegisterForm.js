import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          สมัครสมาชิก
      </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='ชื่อผู้ใช้งาน' />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='รหัสผ่าน' type='password' />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='ยืนยันรหัสผ่าน' type='password' />
            <Button color='teal' fluid size='large'>
              สมัครสมาชิก
          </Button>
          </Segment>
        </Form>
        <Message>
          <Link to="/login">เข้าสู่ระบบ</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default RegisterForm