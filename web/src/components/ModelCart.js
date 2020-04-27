import React, { useState } from 'react'
import {
  Modal,
  Button,
  Form,
  TextArea
} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const ModelCart = ({ cart }) => {
  const history = useHistory()
  const [localtion, setLocaltion] = useState('')
  const _onSubnmit = () => {
    console.log(localtion)
    console.log(cart)
    history.push('/order')
  }
  return (
    <>
      <Modal.Header>สั่งอาหาร</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {(() => {
            if (cart.length > 0) {
              return <>
                {cart.map(ca => <>
                  {ca.name}
                  {ca.img}
                </>)}
                <Form size='large'>
                  <TextArea onChange={(e) => setLocaltion(e.target.value)} placeholder='สถานที่จัดส่ง' />
                  <Button onClick={_onSubnmit} color='teal' fluid size='large'>
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

export default ModelCart