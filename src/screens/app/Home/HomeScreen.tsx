import { useQuery } from '@apollo/client'
import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { CustomLoader, IoniconsIcon } from '~/components'
import colors from '~/constants/colors'
import { GET_PRODUCTS } from '~/graphql/product'

export default function HomeScreen() {
  const { data, loading, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      index: 0,
      limit: 10,
    },
  })

  return (
    <CustomLoader isLoading={loading}>
      <FlatList
        data={data?.products?.products}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View style={{ flex: 1 }}>
              <Text>{item.description1}</Text>
            </View>

            <TouchableOpacity>
              <IoniconsIcon
                name="chevron-forward"
                size={24}
                color={colors.darkGray}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          fetchMore({
            variables: {
              index: data?.products?.products?.length,
            },
          })
        }}
      />
    </CustomLoader>
  )
}

const styles = StyleSheet.create({
  productCard: {
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
