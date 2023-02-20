import { apiClient } from './apiClient'

class HttpClient {
  async get<TReturnApi>(path: string, params?: {}) {
    return await apiClient.get<TReturnApi>(path, {
      params,
    })
  }
}

export const httpClient = new HttpClient()
