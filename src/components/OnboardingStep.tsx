import React from 'react'
import { StyleSheet, View } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import colors from '~/constants/colors'

type Props = {
  index: number
}

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: colors.primary,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: colors.primary,
  stepStrokeUnFinishedColor: colors.white,

  separatorFinishedColor: colors.primary,
  separatorUnFinishedColor: colors.gray,

  stepIndicatorFinishedColor: colors.primary,
  stepIndicatorUnFinishedColor: colors.gray,
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: colors.primary,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: colors.primary,
}

export default function OnboardingStep({ index }: Props) {
  return (
    <View style={styles.container}>
      <StepIndicator
        currentPosition={index}
        stepCount={3}
        customStyles={customStyles}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
})
