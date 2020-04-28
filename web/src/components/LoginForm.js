import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import { setToken, setUser } from '../utils'
import useAxios from 'axios-hooks'
import conf from '../config'

const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const [
    { data, loading, error }, executePost] = useAxios(
      {
        url: `${conf}/login`,
        method: 'POST'
      }
    )
  useEffect(() => {
    if (data?.status === 200) {
      console.log(data.user)
      setUser(JSON.stringify(data.user))
      setToken(data.token)
      history.push('/')
    }
  }, [loading])
  const onSubmit = () => {
    executePost({
      data: {
        user_name: userName,
        password: password
      }
    })
  }
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          เข้าสู่ระบบ
      </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input onChange={(e) => setUserName(e.target.value)} fluid icon='user' iconPosition='left' placeholder='ชื่อผู้ใช้งาน' />
            <Form.Input onChange={(e) => setPassword(e.target.value)} fluid icon='lock' iconPosition='left' placeholder='รหัสผ่าน' type='password' />
            <Button onClick={onSubmit} color='teal' fluid size='large'>
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
