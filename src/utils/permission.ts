import { BASE_URL, JIRA_KEY } from '@/constants'
import type { User, UserParams } from '@/types'

// getToken
export const getToken = () => {
  return window.localStorage.getItem(JIRA_KEY) || ''
}

// handleUserResponse
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(JIRA_KEY, user.token || '')
  return user
}

// login
export const login = (data: UserParams) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) return handleUserResponse(await res.json())
    else return Promise.reject(data)
  })
}

// register
export const register = (data: UserParams) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) return handleUserResponse(await res.json())
    else return Promise.reject(data)
  })
}

// logout
export const logout = async () => window.localStorage.removeItem(JIRA_KEY)
