import React from 'react'
import { AppHeader } from 'core/src/components/AppHeader'
import { AppHeader as WebHeader } from 'core/src/components/AppHeader.web'

export default {
  title: 'Header',
}

export const Mobile = () => <AppHeader />
export const Web = () => <WebHeader />
