import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '~/components'
import constants from '~/constants'
import colors from '~/constants/colors'

export default function SplashScreen() {
  return (
    <View
      style={[
        constants.styles.containerCentered,
        { backgroundColor: colors.primary },
      ]}>
      <Text style={styles.title}>CaseStudy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',

    color: colors.white,
  },
})
