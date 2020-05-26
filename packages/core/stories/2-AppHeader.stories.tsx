import React from 'react'
import { AppHeader as HeaderIOS } from '../src/components/AppHeader.ios'
import { AppHeader as HeaderAndroid } from '../src/components/AppHeader.android'
import { AppHeader as HeaderWeb } from '../src/components/AppHeader'

export default {
  title: 'Header',
}

export const Web = () => <HeaderWeb />
export const Android = () => <HeaderAndroid />
export const IOS = () => <HeaderIOS />
