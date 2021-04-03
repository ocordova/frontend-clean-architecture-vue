import { environment } from '../misc/environment'
import { httpClient } from '../misc/http-client'
import { UserAdapter, PaginationAdapter } from '../domain/adapters'

export class UserRepository {
  baseUrl = environment.apiUrl
  http = httpClient
  userAdapter = new UserAdapter()
  paginationAdapter = new PaginationAdapter()

  async getUsers(page = 1) {
    const request = {
      url: `${this.baseUrl}/users`,
      params: {
        page
      }
    }

    const response = await this.http.get(request)

    const data = this.userAdapter.toEntity(response.data)
    const pagination = this.paginationAdapter.toEntity(response.meta.pagination)

    return { data, pagination }
  }
}
