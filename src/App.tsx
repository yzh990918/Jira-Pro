import { useAuth } from './hooks'
import { AuthApp } from './pages/auth-app'
import { UnAuthApp } from './pages/unAuth'

export default function App() {
  const { user } = useAuth()

  return (<div className="text-center">{ user ? <AuthApp/> : <UnAuthApp /> }</div>)
}
