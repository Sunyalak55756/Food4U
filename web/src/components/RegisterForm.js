import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import { setToken, setUser } from '../utils'
import useAxios from 'axios-hooks'
import conf from '../config'

const RegisterForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorForm, setErrorForm] = useState('')
  const history = useHistory()
  const [
    { data, loading }, executePost] = useAxios(
      {
        url: `${conf}/register`,
        method: 'POST'
      }
    )
  useEffect(() => {
    if (data?.status === 200) {
      setUser(JSON.stringify(data.user))
      setToken(data.token)
      history.push('/')
    }
  }, [loading])
  const onSubmit = () => {
    if (password === confirmPassword) {
      executePost({
        data: {
          user_name: userName,
          password: password
        }
      })
    } else {
      setErrorForm('รหัสผ่านไม่ตรงกัน')
    }
  }
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          สมัครสมาชิก
      </Header>
        <Form size='large'>
          <Segment stacked>
            {errorForm}
            <Form.Input onChange={(e) => setUserName(e.target.value)} fluid icon='user' iconPosition='left' placeholder='ชื่อผู้ใช้งาน' />
            <Form.Input onChange={(e) => setPassword(e.target.value)} fluid icon='lock' iconPosition='left' placeholder='รหัสผ่าน' type='password' />
            <Form.Input onChange={(e) => setConfirmPassword(e.target.value)} fluid icon='lock' iconPosition='left' placeholder='ยืนยันรหัสผ่าน' type='password' />
            <Button onClick={onSubmit} color='teal' fluid size='large'>
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