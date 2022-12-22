import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Button } from '~/components'
import { AuthStackParams } from '~/navigation'

type Props = StackScreenProps<AuthStackParams, 'Home'>

export default function HomeScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      <Text>Welcome</Text>

      <Button onPress={() => navigation.navigate('Login')}>Continue</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
})
