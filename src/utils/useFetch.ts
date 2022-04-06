
import qs from 'qs'
import { BASE_URL } from '@/constants'
import * as auth from '@/utils'
import { useAuth } from '@/hooks'

export interface FetchConfig extends RequestInit {
  token?: string
  data?: object
}

/**
 * 封装 fetch
 * @param url api path
 * @param param1 配置 token data headers...
 * @returns Promise<void>
 */
export const useFetch = async (url: string, { data, token, ...customConfig }: FetchConfig = {}) => {
  // 默认配置
  const config: FetchConfig = {
    method: 'GET',
    headers: {
      'Authorization': token ? `${`Bearer ${token}`}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  }

  // 处理 data
  if (config.method?.toUpperCase() === 'GET')
    url += `${qs.stringify(data) ? '?' : ''}${qs.stringify(data)}`
  else
    config.body = `${qs.stringify(data || {})}`

  return window.fetch(`${BASE_URL}/${url}`, config).then(async (response) => {
    // 未鉴权
    if (response.status === 401) {
      await auth.logout()
      window.location.reload()
      return Promise.reject(new Error('请重新登录'))
    }

    const data = await response.json()
    if (response.ok)
      return data

    else
      // fetch 捕获状态码异常并非在 catch 中，而是在非 response.ok 中进行捕获，catch可以捕获网络异常
      return Promise.reject(data)
  // eslint-disable-next-line no-alert
  }).catch(() => { alert('网络异常') })
}

// 自动携带 token 的 封装 fetch
export const useFetchWithToken = () => {
  const { user } = useAuth()

  return (...[url, config]: Parameters<typeof useFetch>) => useFetch(url, { ...config, token: user?.token })
}
