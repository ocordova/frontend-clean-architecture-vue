import { User, Pagination } from '../domain/entities'

export class PaginationAdapter {
  toEntity(pagination) {
    const entity = new Pagination({
      limit: pagination.limit,
      page: pagination.page,
      pages: pagination.pages,
      total: pagination.total
    })
    return entity
  }
}

export class UserAdapter {
  singleEntityUser = (user) => {
    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      gender: user.gender,
      status: user.status,
      createdAt: user.created_at,
      updatedAt: user.updated_at
    })
  }

  toEntity(data) {
    if (!data) return null
    if (Array.isArray(data)) {
      return data.map(this.singleEntityUser)
    } else {
      return this.singleEntityUser()
    }
  }
}
