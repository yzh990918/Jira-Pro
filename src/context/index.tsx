import { AuthProvider } from './auth-context'

// 全局 fagment
export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>
}
