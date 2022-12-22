import { gql } from '~/__generated__'

export const GET_USER = gql(`
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
`)
