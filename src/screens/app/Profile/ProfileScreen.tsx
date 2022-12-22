import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetUser } from '~/hooks/graphql/user'
import { CustomLoader } from '~/components'

export default function ProfileScreen() {
  const { data, loading } = useGetUser()

  console.log(data.user)

  return (
    <CustomLoader isLoading={loading}>
      <Text>ProfileScreen</Text>
    </CustomLoader>
  )
}

const styles = StyleSheet.create({})
