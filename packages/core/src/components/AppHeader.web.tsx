import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../styles/colors'

export function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This header only shows in web/desktop
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    backgroundColor: colors.lighter,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 36,
    fontWeight: '600',
  },
})
