import { useQuery, gql } from '@apollo/client'

const GET_USER = gql`
  query GetUser {
    user {
      firebaseUserUID
      name
      code
      contact
      email
      address1
      address2
      address3
      city
      country
      postCode
      telephone
      telephone2
      mobile
      fax
      companyName
      contactName
      contactEmail
      userCode
      creditLimit
      currencyCode
      marketingSmsEnabled
      marketingEmailEnabled
      marketingNotificationEnabled
      showAllPricesIncludingVat
    }
  }
`

export function useGetUser() {
  return useQuery(GET_USER)
}
