import { gql } from '~/__generated__'

export const GET_PRODUCTS = gql(`
  query GetProducts(
    $query: String
    $filterCategories: [Int64!]
    $filterAttributeValues: [Int64!]
    $filterNewProducts: Boolean
    $filterPromotions: Boolean
    $filterClearance: Boolean
    $filterFavorites: Boolean
    $filterBarcode: String
    $sortBy: String
    $index: Int!
    $limit: Int!
  ) {
    products(
      query: $query
      filterCategories: $filterCategories
      filterAttributeValues: $filterAttributeValues
      filterNewProducts: $filterNewProducts
      filterPromotions: $filterPromotions
      filterClearance: $filterClearance
      filterFavorites: $filterFavorites
      filterBarcode: $filterBarcode
      sortBy: $sortBy
      index: $index
      limit: $limit
    ) {
      count
      products {
        id
        code
        description1
        description2
        description3
        price {
          price {
            price
          }
        }
        attributes {
          name
          values {
            id
            name
          }
        }
        categories {
          id
          name
          type
          pictureUrl
          visible
          childCategories {
            id
            name
            type
            pictureUrl
            visible
          }
        }
      }
    }
  } 
`)
