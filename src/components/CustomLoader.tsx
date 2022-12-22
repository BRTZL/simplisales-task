import * as React from 'react'
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import colors from '../constants/colors'

type Props = {
  isLoading: boolean
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export function CustomLoader({
  isLoading,
  children,
  style = { flex: 1 },
}: Props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={style}>{children}</View>

      {isLoading && <View style={styles.backdrop} />}
      {isLoading && (
        <ActivityIndicator
          size="large"
          color={colors.white}
          style={styles.loader}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  loader: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    zIndex: 100,
  },
})
