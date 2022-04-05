import { AuthContext } from '@/context/auth-context'

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context)
    throw new Error('useAuth must be use in AuthProvider')

  return context
}
