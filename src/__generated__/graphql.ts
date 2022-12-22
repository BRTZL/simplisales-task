/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Int64: any;
  Upload: any;
};

export type ChildProductCategory = {
  __typename?: 'ChildProductCategory';
  id: Scalars['Int64'];
  index: Scalars['Int'];
  name: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
  type: Scalars['Int'];
  visible: Scalars['Boolean'];
};

export type DatabaseUpdate = {
  __typename?: 'DatabaseUpdate';
  cachedData: Scalars['Boolean'];
  categories: Array<ProductCategory>;
  frequentOrderedProducts: Array<Scalars['Int64']>;
  orders: Array<Order>;
  productAttributes: Array<ProductAttribute>;
  productStockReminders: Array<Scalars['Int64']>;
  products: Array<Product>;
  promotions: Array<Scalars['Int64']>;
  snapshotDate?: Maybe<Scalars['Int64']>;
  userFavoriteProducts: Array<Scalars['Int64']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Login mutation. */
  login?: Maybe<Scalars['String']>;
  /** Logout mutation. */
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationLoginArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  collectionDate?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  currencyValue?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['String']>;
  details: Array<OrderDetail>;
  discountTotal: Scalars['Float'];
  fulfillmentType: Scalars['String'];
  id: Scalars['Int64'];
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  orderName: Scalars['String'];
  orderNo: Scalars['String'];
  paymentType: Scalars['String'];
  status: Scalars['Int'];
  subTotal: Scalars['Float'];
  total: Scalars['Float'];
  vatTotal: Scalars['Float'];
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  deletedAt?: Maybe<Scalars['String']>;
  discountTotal: Scalars['Float'];
  id: Scalars['Int64'];
  pCode?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  productId: Scalars['Int64'];
  quantity: Scalars['Float'];
  subTotal: Scalars['Float'];
  total: Scalars['Float'];
  unit: Scalars['String'];
  vatRate: Scalars['Float'];
  vatTotal: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  allowSales?: Maybe<Scalars['String']>;
  attributes: Array<ProductAttribute>;
  barcode1?: Maybe<Scalars['String']>;
  barcode2?: Maybe<Scalars['String']>;
  barcode3?: Maybe<Scalars['String']>;
  catalogCode?: Maybe<Scalars['String']>;
  categories: Array<ProductCategory>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  defaultUnit?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  description1?: Maybe<Scalars['String']>;
  description2?: Maybe<Scalars['String']>;
  description3?: Maybe<Scalars['String']>;
  id: Scalars['Int64'];
  isFavorites?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  itemType?: Maybe<Scalars['String']>;
  minStock: Scalars['Int'];
  mobilePublished: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  notes2?: Maybe<Scalars['String']>;
  pSize?: Maybe<Scalars['String']>;
  price?: Maybe<ProductPrice>;
  rawPrices: Array<ProductPriceDetail>;
  saleType?: Maybe<Scalars['Int']>;
  secondaryUnit?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<StockStatus>;
  unit1?: Maybe<Scalars['String']>;
  unit2?: Maybe<Scalars['String']>;
  unitRate1?: Maybe<Scalars['Float']>;
  vat?: Maybe<Scalars['Int']>;
  vatCode?: Maybe<Scalars['String']>;
  webPublished: Scalars['Boolean'];
  weight?: Maybe<Scalars['String']>;
};

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  id: Scalars['Int64'];
  index: Scalars['Int'];
  name: Scalars['String'];
  values: Array<ProductAttributeValue>;
  visible: Scalars['Boolean'];
};

export type ProductAttributeValue = {
  __typename?: 'ProductAttributeValue';
  id: Scalars['Int64'];
  index: Scalars['Int'];
  name: Scalars['String'];
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  childCategories: Array<Maybe<ChildProductCategory>>;
  id: Scalars['Int64'];
  index: Scalars['Int'];
  name: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
  type: Scalars['Int'];
  visible: Scalars['Boolean'];
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  clearancePrice?: Maybe<ProductPriceDetail>;
  price?: Maybe<ProductPriceDetail>;
  privatePrice?: Maybe<ProductPriceDetail>;
  promoPrice?: Maybe<ProductPriceDetail>;
};

export type ProductPriceDetail = {
  __typename?: 'ProductPriceDetail';
  discount?: Maybe<Scalars['Float']>;
  netParcelPrice?: Maybe<Scalars['Float']>;
  netPrice?: Maybe<Scalars['Float']>;
  parcelPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceId: Scalars['Int64'];
};

export type Products = {
  __typename?: 'Products';
  count: Scalars['Int64'];
  products: Array<Product>;
};

export type Query = {
  __typename?: 'Query';
  /** Order detail data. */
  orders?: Maybe<Array<WebOrder>>;
  /**
   * Product list.
   * sortBy: NAME_DESC, NAME_ASC, PRICE_DESC, PRICE_ASC
   * query: not required
   * filterCategories: not required
   * filterCategories: not required
   * filterNewProducts: false
   * filterPromotions: false
   * filterClearance: false
   * filterFavorites: false
   * filterBarcode: not required
   * ---
   * index: 0
   * limit: 10
   * ...
   * index: 10
   * limit: 10
   * ...
   * index: 20
   * limit: 10
   */
  products?: Maybe<Products>;
  /** Using this query, you can get user details or check token is working. */
  user?: Maybe<User>;
};


export type QueryOrdersArgs = {
  endDate?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  filterAttributeValues?: InputMaybe<Array<Scalars['Int64']>>;
  filterBarcode?: InputMaybe<Scalars['String']>;
  filterCategories?: InputMaybe<Array<Scalars['Int64']>>;
  filterClearance?: InputMaybe<Scalars['Boolean']>;
  filterFavorites?: InputMaybe<Scalars['Boolean']>;
  filterNewProducts?: InputMaybe<Scalars['Boolean']>;
  filterPromotions?: InputMaybe<Scalars['Boolean']>;
  index?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type StockStatus = {
  __typename?: 'StockStatus';
  available: Scalars['Boolean'];
  lowStock: Scalars['Boolean'];
  saleType: Scalars['Int'];
  suspended: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  creditLimit?: Maybe<Scalars['Float']>;
  currencyCode?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fax?: Maybe<Scalars['String']>;
  firebaseUserUID?: Maybe<Scalars['String']>;
  marketingEmailEnabled: Scalars['Boolean'];
  marketingNotificationEnabled: Scalars['Boolean'];
  marketingSmsEnabled: Scalars['Boolean'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  showAllPricesIncludingVat: Scalars['Boolean'];
  telephone?: Maybe<Scalars['String']>;
  telephone2?: Maybe<Scalars['String']>;
  userCode?: Maybe<Scalars['String']>;
};

export type WebOrder = {
  __typename?: 'WebOrder';
  collectionDate?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  currencyValue?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['String']>;
  details: Array<WebOrderDetail>;
  discountTotal: Scalars['Float'];
  fulfillmentType: Scalars['String'];
  id: Scalars['Int64'];
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  orderName: Scalars['String'];
  orderNo: Scalars['String'];
  paymentType: Scalars['String'];
  status: Scalars['Int'];
  subTotal: Scalars['Float'];
  total: Scalars['Float'];
  vatTotal: Scalars['Float'];
};

export type WebOrderDetail = {
  __typename?: 'WebOrderDetail';
  deletedAt?: Maybe<Scalars['String']>;
  discountTotal: Scalars['Float'];
  id: Scalars['Int64'];
  price: Scalars['Float'];
  product: Product;
  quantity: Scalars['Float'];
  subTotal: Scalars['Float'];
  total: Scalars['Float'];
  unit: Scalars['String'];
  vatRate: Scalars['Float'];
  vatTotal: Scalars['Float'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: string | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: boolean | null };

export type GetOrdersQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
}>;


export type GetOrdersQuery = { __typename?: 'Query', orders?: Array<{ __typename?: 'WebOrder', id: any, orderNo: string, orderName: string, fulfillmentType: string, paymentType: string, orderDate?: string | null, deliveryDate?: string | null, status: number, currency?: string | null, subTotal: number, discountTotal: number, total: number, notes?: string | null, details: Array<{ __typename?: 'WebOrderDetail', id: any, unit: string, quantity: number, price: number, total: number, product: { __typename?: 'Product', id: any, description1?: string | null } }> }> | null };

export type GetProductsQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
  filterCategories?: InputMaybe<Array<Scalars['Int64']> | Scalars['Int64']>;
  filterAttributeValues?: InputMaybe<Array<Scalars['Int64']> | Scalars['Int64']>;
  filterNewProducts?: InputMaybe<Scalars['Boolean']>;
  filterPromotions?: InputMaybe<Scalars['Boolean']>;
  filterClearance?: InputMaybe<Scalars['Boolean']>;
  filterFavorites?: InputMaybe<Scalars['Boolean']>;
  filterBarcode?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  index: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetProductsQuery = { __typename?: 'Query', products?: { __typename?: 'Products', count: any, products: Array<{ __typename?: 'Product', id: any, code?: string | null, description1?: string | null, description2?: string | null, description3?: string | null, price?: { __typename?: 'ProductPrice', price?: { __typename?: 'ProductPriceDetail', price?: number | null } | null } | null, attributes: Array<{ __typename?: 'ProductAttribute', name: string, values: Array<{ __typename?: 'ProductAttributeValue', id: any, name: string }> }>, categories: Array<{ __typename?: 'ProductCategory', id: any, name: string, type: number, pictureUrl?: string | null, visible: boolean, childCategories: Array<{ __typename?: 'ChildProductCategory', id: any, name: string, type: number, pictureUrl?: string | null, visible: boolean } | null> }> }> } | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', firebaseUserUID?: string | null, name?: string | null, code?: string | null, contact?: string | null, email: string, address1?: string | null, address2?: string | null, address3?: string | null, city?: string | null, country?: string | null, postCode?: string | null, telephone?: string | null, telephone2?: string | null, mobile?: string | null, fax?: string | null, companyName?: string | null, contactName?: string | null, contactEmail?: string | null, userCode?: string | null, creditLimit?: number | null, currencyCode?: string | null, marketingSmsEnabled: boolean, marketingEmailEnabled: boolean, marketingNotificationEnabled: boolean, showAllPricesIncludingVat: boolean } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const GetOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"orderNo"}},{"kind":"Field","name":{"kind":"Name","value":"orderName"}},{"kind":"Field","name":{"kind":"Name","value":"fulfillmentType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentType"}},{"kind":"Field","name":{"kind":"Name","value":"orderDate"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryDate"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"subTotal"}},{"kind":"Field","name":{"kind":"Name","value":"discountTotal"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description1"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterCategories"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int64"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterAttributeValues"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int64"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterNewProducts"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterPromotions"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterClearance"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterFavorites"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterBarcode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"index"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"filterCategories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterCategories"}}},{"kind":"Argument","name":{"kind":"Name","value":"filterAttributeValues"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterAttributeValues"}}},{"kind":"Argument","name":{"kind":"Name","value":"filterNewProducts"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterNewProducts"}}},{"kind":"Argument","name":{"kind":"Name","value":"filterPromotions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterPromotions"}}},{"kind":"Argument","name":{"kind":"Name","value":"filterClearance"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterClearance"}}},{"kind":"Argument","name":{"kind":"Name","value":"filterFavorites"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterFavorites"}}},{"kind":"Argument","name":{"kind":"Name","value":"filterBarcode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterBarcode"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"index"},"value":{"kind":"Variable","name":{"kind":"Name","value":"index"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description1"}},{"kind":"Field","name":{"kind":"Name","value":"description2"}},{"kind":"Field","name":{"kind":"Name","value":"description3"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"pictureUrl"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}},{"kind":"Field","name":{"kind":"Name","value":"childCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"pictureUrl"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firebaseUserUID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"address3"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"postCode"}},{"kind":"Field","name":{"kind":"Name","value":"telephone"}},{"kind":"Field","name":{"kind":"Name","value":"telephone2"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"fax"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"userCode"}},{"kind":"Field","name":{"kind":"Name","value":"creditLimit"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"marketingSmsEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"marketingEmailEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"marketingNotificationEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"showAllPricesIncludingVat"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;