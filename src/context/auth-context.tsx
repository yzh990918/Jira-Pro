import type { ReactNode } from 'react'
import { createContext } from 'react'
import type { User, UserParams } from '@/types'
import * as auth from '@/utils'
import { useFetch } from '@/utils/useFetch'
import { useMount } from '@/hooks'

interface AuthContextValueType {
  user: User | null
  register: (form: UserParams) => Promise<void>
  login: (form: UserParams) => Promise<void>
  logout: () => Promise<void>
}

const bootStrapUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    const data = await useFetch('me', { token })
    user = data.user
  }

  return user
}

// TODO: 记笔记，useContext如何使用
export const AuthContext = createContext<AuthContextValueType | undefined>(undefined)
// only use for devtools
AuthContext.displayName = 'AuthContext'

// 全局 context 根组件，共享信息 子代只需要通过 useContext(authContext) 就可以取出 value
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  // dispatches
  const login = (form: UserParams) => auth.login(form).then(setUser)
  const register = (form: UserParams) => auth.register(form).then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))

  // 初始化用户信息
  useMount(() => {
    bootStrapUser().then(setUser)
  })

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />
}
