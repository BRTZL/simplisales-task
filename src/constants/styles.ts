import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import colors from './colors'

type Styles = Record<StyleNames, ViewStyle | TextStyle | ImageStyle>

type StyleNames = 'container' | 'containerCentered'

const styles: Styles = {
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  containerCentered: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default styles
