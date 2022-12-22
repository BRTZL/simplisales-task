import { useWindowDimensions, ViewStyle } from 'react-native'

export function useScreenOptions() {
  const dimensions = useWindowDimensions()

  const isLargeScreen = dimensions.width >= 768

  const dashboardWidthSingle = isLargeScreen
    ? dimensions.width * 0.8 - 40
    : dimensions.width - 40

  const dashboardWidthDouble = isLargeScreen
    ? (dimensions.width * 0.8 - 60) / 2
    : dimensions.width - 40

  const gridStyle: ViewStyle = {
    width: dashboardWidthSingle,
    flexDirection: isLargeScreen ? 'row' : 'column',
    justifyContent: 'space-between',
  }

  const maxButtonWidth = Math.min(dimensions.width - 40, 360)

  return {
    ...dimensions,
    isLargeScreen,
    gridStyle,
    dashboardWidthSingle,
    dashboardWidthDouble,
    maxButtonWidth,
  }
}
