import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { Text } from './Text'
import colors from '../constants/colors'
import { IoniconsIcon } from '.'

type ListItemProps = {
  leading?: any
  trailing?: any
  title: string
  subTitle?: string
  onPress?: () => void
}

export const ListItem = ({
  leading,
  trailing,
  title,
  subTitle,
  onPress,
}: ListItemProps) => {
  return (
    <TouchableOpacity style={styles.settingsTile} onPress={onPress}>
      {leading && (
        <Image
          source={leading}
          style={{ marginRight: 12, width: 24 }}
          resizeMode="contain"
        />
      )}
      <View style={{ flex: 1 }}>
        <Text style={styles.settingsTileTitle}>{title}</Text>
        {subTitle && (
          <Text style={styles.settingsTileSubTitle}>{subTitle}</Text>
        )}
      </View>

      {trailing ?? (
        <IoniconsIcon
          name="chevron-forward-outline"
          size={20}
          color={colors.lightGray}
        />
      )}
    </TouchableOpacity>
  )
}

export const ListSeparator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  settingsTile: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: colors.background,
    alignItems: 'center',

    flexDirection: 'row',
    marginBottom: 1,
  },
  settingsTileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingsTileSubTitle: {
    fontSize: 12,
    color: colors.hintText,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
})
