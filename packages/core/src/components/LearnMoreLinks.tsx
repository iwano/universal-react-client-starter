import colors from '../styles/colors'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const links = [
  {
    id: 1,
    title: 'React',
    link: 'https://github.com/facebook/react',
    description: 'Library for building user interfaces',
  },
  {
    id: 2,
    title: 'create-react-app',
    link: 'https://github.com/facebook/create-react-app',
    description: 'Used to bootstrap the web app',
  },
  {
    id: 3,
    title: 'react-native',
    link: 'https://github.com/facebook/react-native',
    description: 'Android & iOS clients',
  },
  {
    id: 4,
    title: 'react-native-web',
    link: 'https://github.com/necolas/react-native-web',
    description: 'Makes it possible to run React Native components and APIs on the web using React DOM',
  },
  {
    id: 5,
    title: 'Electron',
    link: 'https://github.com/electron/electron',
    description: 'Desktop clients',
  },
  {
    id: 6,
    title: 'Electron builder',
    link: 'https://github.com/electron-userland/electron-builder',
    description: 'Package and build a ready for distribution Electron app with “auto update” support',
  },
  {
    id: 7,
    title: 'Typescript',
    link: 'https://github.com/Microsoft/TypeScript',
    description: 'Static Type Checker',
  },
]

const LearnMoreLinks = () => (
  <View style={styles.container}>
    {links.map(({ id, title, link, description }) => {
      return (
        <React.Fragment key={id}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => Linking.openURL(link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      )
    })}
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: colors.dark,
  },
  separator: {
    backgroundColor: colors.light,
    height: 1,
  },
})

export default LearnMoreLinks
