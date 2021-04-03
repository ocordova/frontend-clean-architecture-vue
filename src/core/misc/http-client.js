import axios from 'axios'

class HttpClient {
  constructor() {
    this.http = axios.create()
  }

  async get(parameters) {
    const { url, params } = parameters
    const response = await this.http.get(url, { params })
    return response.data
  }

  async post(parameters) {
    const { url, payload } = parameters
    const response = await this.http.post(url, payload)
    return response.data
  }
}

export const httpClient = new HttpClient()
