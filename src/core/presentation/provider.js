import { UserController } from './controllers'

export const useProvider = () => ({
  users: new UserController()
})
