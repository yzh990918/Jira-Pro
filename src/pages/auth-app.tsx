import { Button } from 'antd'
import { useAuth } from '@/hooks'
import { ProjectListScreen } from '@/pages/projects'
export const AuthApp = () => {
  const { logout } = useAuth()
  return (
    <div>
      <Button type="primary" onClick={logout}>登出</Button>
      <ProjectListScreen></ProjectListScreen>
    </div>
  )
}
