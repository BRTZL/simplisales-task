import { useQuery } from '@apollo/client'
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import moment from 'moment'
import React, { useCallback, useRef, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { CustomLoader } from '~/components'
import colors from '~/constants/colors'
import { GET_ORDERS } from '~/graphql/order'

const today = new Date(Date.now())
const lastMonth = new Date(Date.now() - 4 * 12 * 30 * 24 * 60 * 60 * 1000)

export default function OrdersScreen() {
  const [selectedOrder, setSelectedOrder] = useState<any>()

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setSelectedOrder(undefined)
    }
  }, [])

  const { data, loading } = useQuery(GET_ORDERS, {
    variables: {
      endDate: moment(today).format('YYYY-MM-DD'),
      startDate: moment(lastMonth).format('YYYY-MM-DD'),
    },
  })

  return (
    <BottomSheetModalProvider>
      <CustomLoader isLoading={loading} style={styles.container}>
        <FlatList
          data={data?.orders}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedOrder(item)
                bottomSheetModalRef.current?.present()
              }}
              style={styles.orderCard}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {item.orderName}
                </Text>
                <Text>
                  {moment(item.orderDate).format('DD.MM.YYYY - HH:mm')}
                </Text>
              </View>

              <View
                style={{
                  marginTop: 12,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  ${item.total}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          backdropComponent={BottomSheetBackdrop}
          index={1}
          snapPoints={['30%', '50%', '100%']}
          onChange={handleSheetChanges}>
          <View style={styles.bottomSheet}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                {selectedOrder?.orderName}
              </Text>

              <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  Order Date
                </Text>
                <Text style={{ fontSize: 16 }}>
                  {moment(selectedOrder?.orderDate).format(
                    'DD.MM.YYYY - HH:mm',
                  )}
                </Text>
              </View>
            </View>

            <FlatList
              style={{ marginTop: 16 }}
              scrollEnabled={false}
              data={selectedOrder?.details}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, color: colors.black }}>
                      {item.product.description1}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{ color: colors.hintText }}>
                      {item.quantity} {item.unit}
                    </Text>
                    <Text
                      style={{
                        color: colors.black,
                        fontSize: 16,
                        fontWeight: '500',
                      }}>
                      ${item.total}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    backgroundColor: colors.gray,

                    marginVertical: 6,
                  }}
                />
              )}
              ListFooterComponent={() => (
                <View
                  style={{
                    marginTop: 16,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                      Total
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      ${selectedOrder?.total}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </BottomSheetModal>
      </CustomLoader>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderCard: {
    backgroundColor: colors.white,
    padding: 16,
  },

  bottomSheet: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
})
