import { Form, Input } from 'antd'
import { LongButton } from '.'
import { useAuth } from '@/hooks'
import type { UserParams } from '@/types'

export const LoginScreen = () => {
  const { login } = useAuth()

  // HTMLFormElement extends Element
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value
  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value
  //   login({ username, password })
  // }

  const handleSubmit = (values: UserParams) => {
    login(values)
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="username" rules={[{ required: true, message: 'Username must be required' }]}>
        <Input type="text" placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Password must be required' }]}>
        <Input.Password />
      </Form.Item>
      <LongButton type="primary" htmlType="submit">登录</LongButton>
    </Form>
  )
}
