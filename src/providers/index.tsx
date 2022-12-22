import React from 'react'
import Main from '../navigation/Main'
import { AuthProvider } from './AuthProvider'

export default function Providers() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  )
}
