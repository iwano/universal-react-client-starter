import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { AppHeader } from './AppHeader'

// declare const global: {HermesInternal: null | {}};
declare var global: any

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
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Code sharing using Monorepo</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>packages/components/App.tsx</Text> to change this
                screen and then come back to see your edits (in the phone, browser or electron).
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Web support via react-native-web</Text>
              <Text style={styles.sectionDescription}>
                Run <Text style={styles.highlight}>yarn web</Text> to 
                open this app in the browser. 
              </Text>
              <Text style={styles.sectionDescription}>
                Run <Text style={styles.highlight}>yarn electron</Text> to 
                open this app with electron. 
              </Text>
              <Text style={styles.sectionDescription}>
                All apps will share the same code unless you create platform-specific files 
                using the appropriate extension (<Text style={styles.highlight}>.web</Text>,{' '}
                <Text style={styles.highlight}>.android</Text>,{' '}
                <Text style={styles.highlight}>.ios</Text>,{' '}
                <Text style={styles.highlight}>.native</Text>, etc).
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  scrollView: {
    backgroundColor: 'white'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
