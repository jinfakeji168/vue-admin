export interface UserLoginType {
  username: string
  password: string
}

export interface UserType {
  [x: string]: string
  username: string
  password: string
  role: string
  roleId: string
}
