import React from 'react'
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native'

import colors from '../constants/colors'

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: 16,
  },
  bodyText: {
    fontWeight: '500',
    fontSize: 16,
    // marginBottom: 12,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 20,
    // marginBottom: 12,
  },
  subHeaderText: {
    color: colors.gray,
    fontSize: 28,
    // marginBottom: 12,
    // marginTop: -12,
  },
})

type TextProps = {
  type?: 'body' | 'header' | 'subheader'
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

export const Text = ({ type = 'body', children, style }: TextProps) => {
  let textStyles: StyleProp<TextStyle>[] = [styles.text]

  if (type === 'body') {
    textStyles.push(styles.bodyText)
  } else if (type === 'header') {
    textStyles.push(styles.headerText)
  } else if (type === 'subheader') {
    textStyles.push(styles.subHeaderText)
  }

  textStyles = [...textStyles, style]

  return <RNText style={textStyles}>{children}</RNText>
}
