import Snackbar, { SnackbarAction } from 'react-native-snackbar'
import colors from '~/constants/colors'

type ShopSnackbarOptions = {
  text: string
  options?: {
    action?: SnackbarAction
    numberOfLines?: number
    duration?: number
  }
}

export function showErrorSnackbar({ text, options }: ShopSnackbarOptions) {
  Snackbar.show({
    text,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: colors.error,
    textColor: colors.white,
    action: options?.action,
    numberOfLines: options?.numberOfLines,
  })
}

export function showSuccessSnackbar({ text, options }: ShopSnackbarOptions) {
  Snackbar.show({
    text,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: colors.success,
    textColor: colors.white,
    action: options?.action,
    numberOfLines: options?.numberOfLines,
  })
}
