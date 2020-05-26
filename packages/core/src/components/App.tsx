import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native'

import { AppHeader } from './AppHeader'
import LearnMoreLinks from './LearnMoreLinks'
import colors from '../styles/colors'
import { getPlatform } from '../helpers/platform'
// declare const global: {HermesInternal: null | {}};
declare let global: any

export function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.root}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <AppHeader />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.caption}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.bodyInner}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                  Current platform is:{' '}
                  <Text style={styles.platform}>{getPlatform()}</Text>
                </Text>
                <View style={styles.button}>
                  <Button
                    onPress={() => {
                      if (__IS_ELECTRON__) {
                        // This block will go away when building the web app
                        window.ipc.send(
                          'show-alert',
                          'This alert will look different in each platform',
                        )
                      } else {
                        alert('This alert will look different in each platform')
                      }
                    }}
                    title="Press Me"
                  />
                </View>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  Code sharing using Monorepo
                </Text>
                <Text style={styles.sectionDescription}>
                  Edit files in{' '}
                  <Text style={styles.highlight}>packages/core/src</Text> and
                  see it update in real time.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                  Running all different clients
                </Text>
                <Text style={styles.sectionDescription}>
                  Run <Text style={styles.highlight}>yarn web</Text> to open
                  this app in the browser.
                </Text>
                <Text style={styles.sectionDescription}>
                  Run <Text style={styles.highlight}>yarn electron</Text> to
                  open this app with electron.
                </Text>
                <Text style={styles.sectionDescription}>
                  Run <Text style={styles.highlight}>yarn android</Text> to open
                  this app on android.
                </Text>
                <Text style={styles.sectionDescription}>
                  Run <Text style={styles.highlight}>yarn ios</Text> to open
                  this app on ios.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Code reuse</Text>
                <Text style={styles.sectionDescription}>
                  All apps will share the same code unless you create
                  platform-specific files using the appropriate extension (
                  <Text style={styles.highlight}>.web</Text>,{' '}
                  <Text style={styles.highlight}>.android</Text>,{' '}
                  <Text style={styles.highlight}>.ios</Text>,{' '}
                  <Text style={styles.highlight}>.native</Text>).
                </Text>
                <Text style={styles.sectionDescription}>
								There is no extension for <Text style={styles.highlight}>Desktop</Text> (web and desktop share the same code), if you want to add desktop specific code you can use the <Text style={styles.highlight}>isDesktop</Text> helper or the <Text style={styles.highlight}>__IS_ELECTRON__</Text> global constant.
                </Text>
                <Text style={styles.sectionDescription}>
									Any conditional block that uses the constant will be removed from the web app build after minification.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <LearnMoreLinks />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  bodyInner: {
    flexBasis: 1000,
    flexGrow: 0,
    flexShrink: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    color: colors.dark,
  },
  button: {
    marginTop: 10,
    width: 100,
  },
  highlight: {
    fontWeight: '700',
  },
  platform: {
    backgroundColor: colors.light,
    borderRadius: 5,
    fontWeight: '700',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  caption: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  footer: {
    color: colors.dark,
    fontSize: 18,
    marginTop: 30,
  },
})
