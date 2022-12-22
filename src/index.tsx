import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Providers from '~/providers'

const queryClient = new QueryClient()

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
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <ApolloProvider client={apolloClient}>
            <Providers />
          </ApolloProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
