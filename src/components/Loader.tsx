import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import colors from '~/constants/colors'

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
})
