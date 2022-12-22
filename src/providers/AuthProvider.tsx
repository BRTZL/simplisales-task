import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useContext, useEffect, useState } from 'react'

export type AuthContextInterface = {
  initializing: boolean
  accessToken: string | null
  login: (_accessToken: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextInterface | null>(null)

type Props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [initializing, setInitializing] = useState(true)
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const _accessToken = await AsyncStorage.getItem('accessToken')
        setAccessToken(_accessToken)
      } catch (e) {
        console.error(e)
        await AsyncStorage.removeItem('accessToken')
        setAccessToken(null)
      }

      setInitializing(false)
    }

    bootstrapAsync()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        initializing,
        accessToken,
        login: async _accessToken => {
          await AsyncStorage.setItem('accessToken', _accessToken)
          setAccessToken(_accessToken)
        },
        logout: async () => {
          await AsyncStorage.removeItem('accessToken')
          setAccessToken(null)
        },
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(): NonNullable<AuthContextInterface> {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return context
}
