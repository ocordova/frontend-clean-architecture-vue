import axios from 'axios'
import { environment } from '../misc/environment'

class HttpClient {
  constructor() {
    this.http = axios.create()
    this.config = {}
  }

  setToken() {
    this.config.headers = {
      Authorization: `Bearer ${environment.accessToken}`
    }
  }

  async get(parameters) {
    const { url, params, requiresToken } = parameters
    if (requiresToken) {
      this.setToken()
    }
    const response = await this.http.get(url, {
      ...this.config,
      params
    })
    return response.data
  }

  async post(parameters) {
    const { url, payload, requiresToken } = parameters
    if (requiresToken) {
      this.setToken(), this.config
    }
    const response = await this.http.post(url, payload, this.config)
    return response.data
  }
}

export const httpClient = new HttpClient()
