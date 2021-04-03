export class User {
  id = undefined
  name = ''
  email = ''
  gender = ''
  status = ''
  createdAt = ''
  updatedAt = ''

  constructor(data) {
    Object.assign(this, data)
  }

  nameFirstLetter() {
    return this.name.substr(0, 1)
  }
}

export class Pagination {
  limit = 0
  page = 0
  pages = 0
  total = 0

  constructor(data) {
    Object.assign(this, data)
  }

  hasNext() {
    return this.page < this.pages ? true : false
  }

  hasPrevious() {
    return this.page > 1 ? true : false
  }
}
