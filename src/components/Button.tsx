import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native'

import colors from '../constants/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
  text: {
    paddingVertical: 3,
    color: colors.white,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  textOutline: {
    color: colors.primary,
  },
})

type ButtonProps = {
  onPress: () => void
  children: string
  disabled?: boolean
  type?: 'outline' | 'white' | 'danger'
  style?: StyleProp<ViewStyle>
} & React.ComponentProps<typeof TouchableOpacity>

export const Button = ({
  onPress = () => {},
  children = '',
  disabled = false,
  type,
  style,
  ...rest
}: ButtonProps) => {
  const containerStyles: StyleProp<ViewStyle>[] = [
    disabled && { opacity: 0.5 },
    styles.container,
    style,
  ]
  const textStyles: StyleProp<TextStyle>[] = [styles.text]

  if (type === 'outline') {
    containerStyles.push(styles.containerOutline)
    textStyles.push(styles.textOutline)
  } else if (type === 'white') {
    containerStyles.push({
      backgroundColor: colors.white,
      borderColor: colors.white,
    })
    textStyles.push({ color: colors.primary })
  } else if (type === 'danger') {
    containerStyles.push({
      backgroundColor: colors.error,
      borderColor: colors.error,
    })
    textStyles.push({ color: colors.white })
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyles}
      disabled={disabled}
      {...rest}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  )
}

type ButtonChildProps = {
  onPress: () => void
  children: React.ReactNode
  disabled?: boolean
  type?: 'outline'
}

export const ButtonChild = ({
  onPress = () => {},
  children,
  disabled = false,
  type,
}: ButtonChildProps) => {
  const containerStyles: StyleProp<ViewStyle>[] = [
    styles.container,
    disabled && { opacity: 0.5 },
  ]
  const textStyles: StyleProp<TextStyle>[] = [styles.text]

  if (type === 'outline') {
    containerStyles.push(styles.containerOutline)
    textStyles.push(styles.textOutline)
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyles}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  )
}
