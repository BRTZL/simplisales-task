import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entry } from '~/types/entry'
import colors from '~/constants/colors'
import { IoniconsIcon, Text } from '.'
import { useGetServiceById, useGetSpecialityById } from '~/hooks/query/service'

type Props = {
  isOdd: boolean
  slot: string
  entry?: Entry
  onCreateEntry?: () => void
  onEditEntry?: () => void
}

export default function SlotListItem({
  isOdd,
  slot,
  entry,
  onCreateEntry,
  onEditEntry,
}: Props) {
  const { data: service } = useGetServiceById(entry?.serviceId)
  const { data: speciality } = useGetSpecialityById(
    entry?.serviceId,
    entry?.specialityId,
  )

  return (
    <View
      style={[
        styles.container,
        isOdd && { backgroundColor: colors.lightGray },
        entry && { borderColor: colors.primary, borderWidth: 1 },
      ]}>
      <Text style={styles.slotText}>{slot}</Text>

      {entry ? (
        <View style={styles.entryDetails}>
          <Text style={styles.entryClientName}>{entry.client.name}</Text>
          <Text style={styles.entryService}>
            {service?.name} - {speciality?.name}
          </Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.crateEntry} onPress={onCreateEntry}>
          <IoniconsIcon name="add-circle-outline" size={22} />
          <Text style={styles.crateEntryText}>Create Entry</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={onEditEntry} disabled={!entry}>
        <IoniconsIcon name="ellipsis-vertical-outline" size={24} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 4,
  },
  slotText: {
    fontSize: 16,
    fontWeight: '600',
  },
  crateEntry: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 12,
    paddingLeft: 12,
    borderLeftWidth: 1,
    borderLeftColor: colors.gray,
  },
  crateEntryText: {
    marginLeft: 4,
    color: colors.primary,
    fontWeight: '600',
  },
  entryDetails: {
    flex: 1,

    marginLeft: 12,
    paddingLeft: 12,
    borderLeftWidth: 1,
    borderLeftColor: colors.gray,
  },
  entryClientName: {
    fontSize: 16,
    fontWeight: '600',
  },
  entryService: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.darkGray,
  },
})
