import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AuthScreen from '~/screens/auth'

export type AuthStackParams = {
  Home: undefined
  Login: undefined
}

const AuthStack = createNativeStackNavigator<AuthStackParams>()

export const Auth = () => (
  <AuthStack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name="Home" component={AuthScreen.HomeScreen} />
    <AuthStack.Screen name="Login" component={AuthScreen.LoginScreen} />
  </AuthStack.Navigator>
)
