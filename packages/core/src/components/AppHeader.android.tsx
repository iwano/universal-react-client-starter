import colors from '../styles/colors'
import { Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

export function AppHeader () {
  return (
    <ImageBackground
      accessibilityRole={'image'}
      source={require('react-native/Libraries/NewAppScreen/components/logo.png')}
      style={styles.background}
      imageStyle={styles.logo}>
      <Text style={styles.text}>Hello World! 🤖</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: '#679e2e',
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.black,
  },
})
