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
      <Text style={styles.text}>Mobile Header!</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: colors.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.black,
  },
})
