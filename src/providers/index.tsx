import React from 'react'
import Main from '../navigation/Main'
import { AuthProvider } from './AuthProvider'
import { AxiosProvider } from './AxiosProvider'

export default function Providers() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <Main />
      </AxiosProvider>
    </AuthProvider>
  )
}
