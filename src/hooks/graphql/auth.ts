import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

export function useLogin() {
  return useMutation(LOGIN)
}

export function useLogout() {}
