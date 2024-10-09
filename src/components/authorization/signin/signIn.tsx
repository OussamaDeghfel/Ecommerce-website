import { Checkbox, Form, Input } from 'antd'
import React from 'react'

const SignIn = () => {
  return (
    <div>
      <div>
        <Form layout="vertical">
          <Form.Item 
          label="Email" 
          name="email" 
          rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
          label="Password" 
          name="password" 
          rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item 
          name="remember"
          valuePropName='checked'
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SignIn