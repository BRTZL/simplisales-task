import { useMutation } from '@apollo/client'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Button, CustomLoader, IoniconsIcon, TextInput } from '~/components'
import colors from '~/constants/colors'
import { LOGIN } from '~/graphql/auth'
import { AuthStackParams } from '~/navigation'
import { useAuthContext } from '~/providers/AuthProvider'
import { showErrorSnackbar } from '~/utils/snackbar_helpers'

type Props = StackScreenProps<AuthStackParams, 'Login'>

type LoginForm = {
  email: string
  password: string
}

export default function LoginScreen({}: Props) {
  const insets = useSafeAreaInsets()
  const { login: authLogin } = useAuthContext()
  const [login, { loading }] = useMutation(LOGIN)

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    defaultValues: {
      email: __DEV__ ? 'oliverjones@gmail.com' : undefined,
      password: __DEV__ ? '123123' : undefined,
    },
  })

  const onSubmit = handleSubmit(async ({ email, password }) => {
    await login({
      variables: { email, password },
      onCompleted(data) {
        if (data.login) {
          authLogin(data.login)
        }
      },
      onError(error) {
        showErrorSnackbar({
          text: error.message,
        })
      },
    })
  })

  return (
    <CustomLoader
      isLoading={loading}
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom + 12,
        },
      ]}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
            Welcome to Case Study App
          </Text>
        </View>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              leading={
                <IoniconsIcon
                  name="mail-outline"
                  size={16}
                  color={colors.darkGray}
                />
              }
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              autoFocus
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorText={errors.email?.message}
            />
          )}
          name="email"
          rules={{ required: 'Email is Required' }}
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              secureTextEntry
              leading={
                <IoniconsIcon
                  name="lock-closed-outline"
                  size={16}
                  color={colors.darkGray}
                />
              }
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorText={errors.password?.message}
            />
          )}
          name="password"
          rules={{ required: 'Password is Required' }}
        />

        <Button disabled={!isValid} onPress={onSubmit}>
          Login
        </Button>
      </KeyboardAvoidingView>
    </CustomLoader>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
})
