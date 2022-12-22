import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Providers from '~/providers'

const httpLink = new HttpLink({
  uri: 'https://simplisaleshw.cotunnel.com/graphql',
})

const authLink = setContext(async (req, { headers }) => {
  const accessToken = await AsyncStorage.getItem('accessToken')

  return {
    ...headers,
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : null,
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: {
            keyArgs: false,
            merge(existing, incoming) {
              return {
                ...incoming,
                products: [...(existing?.products ?? []), ...incoming.products],
              }
            },
          },
        },
      },
      Product: {
        merge: true,
        keyFields: ['id'],
      },
    },
  }),
})

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <ApolloProvider client={apolloClient}>
          <Providers />
        </ApolloProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
