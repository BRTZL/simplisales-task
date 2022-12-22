import { gql } from '~/__generated__'

export const LOGIN = gql(`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`)

export const LOGOUT = gql(`
  mutation Logout {
    logout
  }
`)
