import { useAuth } from '@/hooks'
import { ProjectListScreen } from '@/pages/projects'
export const AuthApp = () => {
  const { logout } = useAuth()

  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen></ProjectListScreen>
    </div>
  )
}
