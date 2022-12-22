import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { customStyles, Styles } from '~/constants'

export function useStyleOptions(): Styles {
  const insets = useSafeAreaInsets()

  return {
    container: {
      ...customStyles.container,
      marginBottom: insets.bottom,
      marginTop: insets.top,
      marginLeft: insets.left,
      marginRight: insets.right,
    },
    containerCentered: {
      ...customStyles.containerCentered,
      marginBottom: insets.bottom,
      marginTop: insets.top,
      marginLeft: insets.left,
      marginRight: insets.right,
    },
  }
}
