import React from 'react'
import {
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  ViewStyle,
} from 'react-native'

import colors from '../constants/colors'
import { Text } from './Text'

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.background,
    marginBottom: 12,
    borderRadius: 8,

    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  labelText: {
    color: colors.hintText,
    fontSize: 16,
    marginBottom: 6,
    paddingLeft: 4,
  },
  textInput: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
  border: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  borderError: {
    borderWidth: 1,
    borderColor: colors.error,
  },
  errorText: {
    marginTop: 5,
    color: colors.error,
  },
})

interface TextInputProps extends RNTextInputProps {
  label?: string
  leading?: React.ReactNode
  errorText?: string
  containerStyle?: StyleProp<ViewStyle>
}

export const TextInput = ({
  label,
  leading,
  errorText = '',
  containerStyle,
  ...rest
}: TextInputProps) => {
  const textInputRef = React.createRef<RNTextInput>()

  const borderStyles: StyleProp<ViewStyle> = [styles.border]

  if (errorText && errorText.length > 0) {
    borderStyles.push(styles.borderError)
  }

  return (
    <View style={containerStyle}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <View
        style={[styles.inputContainer, borderStyles]}
        onTouchStart={() => textInputRef.current?.focus()}>
        {leading ? (
          <View
            style={{
              paddingRight: 8,
            }}>
            {leading}
          </View>
        ) : null}
        <RNTextInput
          ref={textInputRef}
          style={styles.textInput}
          placeholderTextColor={colors.hintText}
          {...rest}
        />
      </View>
      {errorText && <Text style={[styles.errorText]}>{errorText}</Text>}
    </View>
  )
}
