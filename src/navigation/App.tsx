import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { PERMISSIONS, request } from 'react-native-permissions'
import Icon from 'react-native-vector-icons/Ionicons'
import { IoniconsIcon } from '~/components'
import colors from '~/constants/colors'
import AppScreens from '~/screens/app'

export type AppStackParams = {
  BottomTab: undefined

  ProductDetail: {
    id: string
  }
}

export type AppTabParams = {
  Home: undefined
  Orders: undefined
  Profile: undefined
}

const AppStack = createNativeStackNavigator<AppStackParams>()
const AppBottom = createBottomTabNavigator<AppTabParams>()

const AppBottomTabIcons = {
  Home: ['home', 'home-outline'],
  Orders: ['list', 'list-outline'],
  Profile: ['person', 'person-outline'],
}

export function App() {
  React.useEffect(() => {
    request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
  }, [])

  return (
    <AppStack.Navigator
      initialRouteName="BottomTab"
      screenOptions={({ navigation }) => ({
        headerLeft: ({ canGoBack }) =>
          canGoBack && (
            <TouchableOpacity onPress={navigation.goBack}>
              <IoniconsIcon
                name="chevron-back"
                size={30}
                color={colors.white}
              />
            </TouchableOpacity>
          ),
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary,
        },
      })}>
      <AppStack.Screen
        name="BottomTab"
        component={AppBottomTab}
        options={{
          headerShown: false,
          headerBackground: undefined,
        }}
      />
    </AppStack.Navigator>
  )
}

type AppBottomTabProps = StackScreenProps<AppStackParams, 'BottomTab'>

function AppBottomTab({}: AppBottomTabProps) {
  return (
    <AppBottom.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.hintText,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Icon
              name={AppBottomTabIcons[route.name][focused ? 0 : 1]}
              size={size * 0.95}
              color={color}
            />
          )
        },
      })}>
      <AppBottom.Screen
        name="Home"
        component={AppScreens.HomeScreen}
        options={{ title: 'Home' }}
      />
      <AppBottom.Screen
        name="Orders"
        component={AppScreens.OrdersScreen}
        options={{ title: 'Orders' }}
      />
      <AppBottom.Screen
        name="Profile"
        component={AppScreens.ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </AppBottom.Navigator>
  )
}
