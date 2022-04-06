import { RegisterScreen } from './register'
import { LoginScreen } from './login'

export const UnAuthApp = () => {
  const [isRegister, setIsRegister] = useState(false)
  return (
    <div>
      {
        isRegister ? <RegisterScreen /> : <LoginScreen />
      }

      <button onClick={() => setIsRegister(!isRegister)}>切换到{ isRegister ? '登录' : '注册'}</button>
    </div>
  )
}
