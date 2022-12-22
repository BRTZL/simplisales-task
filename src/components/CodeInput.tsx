import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import colors from '../constants/colors'

type Props = {
  onComplete: (code: string) => void
}

export default function CodeInput({ onComplete }: Props) {
  const [value, setValue] = React.useState('')
  const ref = useBlurOnFulfill({ value, cellCount: 6 })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  return (
    <CodeField
      ref={ref}
      {...props}
      autoFocus
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={text => {
        setValue(text)
        if (text.length === 6) {
          onComplete(text)
        }
      }}
      cellCount={6}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <View style={styles.cell} key={index}>
          <Text
            key={index}
            style={styles.cellText}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
          <View
            style={[
              styles.cellBorder,
              { backgroundColor: isFocused ? colors.primary : colors.gray },
            ]}
          />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    backgroundColor: colors.white,
    width: 50,
    height: 50,
  },
  cellBorder: {
    height: 3,
    borderRadius: 10,
  },
  cellText: {
    lineHeight: 46,
    height: 46,
    fontSize: 24,
    textAlign: 'center',
  },
})
