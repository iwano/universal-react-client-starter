/**
 * @format
 */

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { App } from '../../components/src/App'

// Note: test renderer must be required after react-native.

it('renders without crashing', () => {
  renderer.create(<App />)
})
