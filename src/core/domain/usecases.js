import { UserRepository } from '../data/repositories'

export class UserUsecases {
  repository = new UserRepository()

  async getUsers(page) {
    return await this.repository.getUsers(page)
  }

  async createUser(user) {
    return await this.repository.createUser(user)
  }
}
