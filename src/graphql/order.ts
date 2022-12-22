import { gql } from '~/__generated__'

export const GET_ORDERS = gql(`
  query GetOrders(
    $startDate: String
    $endDate: String
  ) {
    orders(
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      orderNo
      orderName
      fulfillmentType
      paymentType
      orderDate
      deliveryDate
      status
      currency
      subTotal
      discountTotal
      total
      notes
      details {
        id
        product {
          id
          description1
        }
        unit
        quantity
        price
        total
      }
    }
  }
`)
