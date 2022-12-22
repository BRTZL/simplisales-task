import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, CustomLoader, TextInput } from '~/components'
import { LOGOUT } from '~/graphql/auth'
import { GET_USER } from '~/graphql/user'
import { useAuthContext } from '~/providers/AuthProvider'
import { showErrorSnackbar } from '~/utils/snackbar_helpers'

export default function ProfileScreen() {
  const { logout: authLogout } = useAuthContext()
  const [logout, { loading: isLogoutLoading }] = useMutation(LOGOUT, {
    onCompleted: () => authLogout(),
    onError: error =>
      showErrorSnackbar({
        text: error.message,
      }),
  })
  const { data, loading: isGetUserLoading } = useQuery(GET_USER)

  return (
    <CustomLoader
      isLoading={isGetUserLoading || isLogoutLoading}
      style={styles.container}>
      <TextInput editable={false} label="Name" value={data?.user?.name ?? ''} />
      <TextInput
        editable={false}
        label="Email"
        value={data?.user?.email ?? ''}
      />
      <TextInput
        editable={false}
        label="Phone Number (mobile)"
        value={data?.user?.mobile ?? ''}
      />

      <Button type="danger" onPress={() => logout()} style={{ marginTop: 16 }}>
        Logout
      </Button>
    </CustomLoader>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
})
