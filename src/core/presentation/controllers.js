import { UserUsecases } from '../domain/usecases'
export class UserController {
  userUseCases = new UserUsecases()

  async getUsers(page) {
    return await this.userUseCases.getUsers(page)
  }

  async createUser(user) {
    return await this.userUseCases.createUser(user)
  }
}
