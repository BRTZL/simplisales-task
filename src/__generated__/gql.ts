/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n": types.LoginDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  query GetOrders(\n    $startDate: String\n    $endDate: String\n  ) {\n    orders(\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      id\n      orderNo\n      orderName\n      fulfillmentType\n      paymentType\n      orderDate\n      deliveryDate\n      status\n      currency\n      subTotal\n      discountTotal\n      total\n      notes\n      details {\n        id\n        product {\n          id\n          description1\n        }\n        unit\n        quantity\n        price\n        total\n      }\n    }\n  }\n": types.GetOrdersDocument,
    "\n  query GetProducts(\n    $query: String\n    $filterCategories: [Int64!]\n    $filterAttributeValues: [Int64!]\n    $filterNewProducts: Boolean\n    $filterPromotions: Boolean\n    $filterClearance: Boolean\n    $filterFavorites: Boolean\n    $filterBarcode: String\n    $sortBy: String\n    $index: Int!\n    $limit: Int!\n  ) {\n    products(\n      query: $query\n      filterCategories: $filterCategories\n      filterAttributeValues: $filterAttributeValues\n      filterNewProducts: $filterNewProducts\n      filterPromotions: $filterPromotions\n      filterClearance: $filterClearance\n      filterFavorites: $filterFavorites\n      filterBarcode: $filterBarcode\n      sortBy: $sortBy\n      index: $index\n      limit: $limit\n    ) {\n      count\n      products {\n        id\n        code\n        description1\n        description2\n        description3\n        price {\n          price {\n            price\n          }\n        }\n        attributes {\n          name\n          values {\n            id\n            name\n          }\n        }\n        categories {\n          id\n          name\n          type\n          pictureUrl\n          visible\n          childCategories {\n            id\n            name\n            type\n            pictureUrl\n            visible\n          }\n        }\n      }\n    }\n  } \n": types.GetProductsDocument,
    "\n  query GetUser {\n    user {\n      firebaseUserUID\n      name\n      code\n      contact\n      email\n      address1\n      address2\n      address3\n      city\n      country\n      postCode\n      telephone\n      telephone2\n      mobile\n      fax\n      companyName\n      contactName\n      contactEmail\n      userCode\n      creditLimit\n      currencyCode\n      marketingSmsEnabled\n      marketingEmailEnabled\n      marketingNotificationEnabled\n      showAllPricesIncludingVat\n    }\n  }\n": types.GetUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOrders(\n    $startDate: String\n    $endDate: String\n  ) {\n    orders(\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      id\n      orderNo\n      orderName\n      fulfillmentType\n      paymentType\n      orderDate\n      deliveryDate\n      status\n      currency\n      subTotal\n      discountTotal\n      total\n      notes\n      details {\n        id\n        product {\n          id\n          description1\n        }\n        unit\n        quantity\n        price\n        total\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOrders(\n    $startDate: String\n    $endDate: String\n  ) {\n    orders(\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      id\n      orderNo\n      orderName\n      fulfillmentType\n      paymentType\n      orderDate\n      deliveryDate\n      status\n      currency\n      subTotal\n      discountTotal\n      total\n      notes\n      details {\n        id\n        product {\n          id\n          description1\n        }\n        unit\n        quantity\n        price\n        total\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProducts(\n    $query: String\n    $filterCategories: [Int64!]\n    $filterAttributeValues: [Int64!]\n    $filterNewProducts: Boolean\n    $filterPromotions: Boolean\n    $filterClearance: Boolean\n    $filterFavorites: Boolean\n    $filterBarcode: String\n    $sortBy: String\n    $index: Int!\n    $limit: Int!\n  ) {\n    products(\n      query: $query\n      filterCategories: $filterCategories\n      filterAttributeValues: $filterAttributeValues\n      filterNewProducts: $filterNewProducts\n      filterPromotions: $filterPromotions\n      filterClearance: $filterClearance\n      filterFavorites: $filterFavorites\n      filterBarcode: $filterBarcode\n      sortBy: $sortBy\n      index: $index\n      limit: $limit\n    ) {\n      count\n      products {\n        id\n        code\n        description1\n        description2\n        description3\n        price {\n          price {\n            price\n          }\n        }\n        attributes {\n          name\n          values {\n            id\n            name\n          }\n        }\n        categories {\n          id\n          name\n          type\n          pictureUrl\n          visible\n          childCategories {\n            id\n            name\n            type\n            pictureUrl\n            visible\n          }\n        }\n      }\n    }\n  } \n"): (typeof documents)["\n  query GetProducts(\n    $query: String\n    $filterCategories: [Int64!]\n    $filterAttributeValues: [Int64!]\n    $filterNewProducts: Boolean\n    $filterPromotions: Boolean\n    $filterClearance: Boolean\n    $filterFavorites: Boolean\n    $filterBarcode: String\n    $sortBy: String\n    $index: Int!\n    $limit: Int!\n  ) {\n    products(\n      query: $query\n      filterCategories: $filterCategories\n      filterAttributeValues: $filterAttributeValues\n      filterNewProducts: $filterNewProducts\n      filterPromotions: $filterPromotions\n      filterClearance: $filterClearance\n      filterFavorites: $filterFavorites\n      filterBarcode: $filterBarcode\n      sortBy: $sortBy\n      index: $index\n      limit: $limit\n    ) {\n      count\n      products {\n        id\n        code\n        description1\n        description2\n        description3\n        price {\n          price {\n            price\n          }\n        }\n        attributes {\n          name\n          values {\n            id\n            name\n          }\n        }\n        categories {\n          id\n          name\n          type\n          pictureUrl\n          visible\n          childCategories {\n            id\n            name\n            type\n            pictureUrl\n            visible\n          }\n        }\n      }\n    }\n  } \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUser {\n    user {\n      firebaseUserUID\n      name\n      code\n      contact\n      email\n      address1\n      address2\n      address3\n      city\n      country\n      postCode\n      telephone\n      telephone2\n      mobile\n      fax\n      companyName\n      contactName\n      contactEmail\n      userCode\n      creditLimit\n      currencyCode\n      marketingSmsEnabled\n      marketingEmailEnabled\n      marketingNotificationEnabled\n      showAllPricesIncludingVat\n    }\n  }\n"): (typeof documents)["\n  query GetUser {\n    user {\n      firebaseUserUID\n      name\n      code\n      contact\n      email\n      address1\n      address2\n      address3\n      city\n      country\n      postCode\n      telephone\n      telephone2\n      mobile\n      fax\n      companyName\n      contactName\n      contactEmail\n      userCode\n      creditLimit\n      currencyCode\n      marketingSmsEnabled\n      marketingEmailEnabled\n      marketingNotificationEnabled\n      showAllPricesIncludingVat\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;