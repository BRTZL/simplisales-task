import React from 'react'
import { useAuthContext } from '~/providers/AuthProvider'
import SplashScreen from '~/screens/SplashScreen'
import { App } from './App'
import { Auth } from './Auth'

export default function Main() {
  const { initializing, accessToken } = useAuthContext()

  if (initializing) {
    return <SplashScreen />
  }

  return accessToken ? <App /> : <Auth />
}
