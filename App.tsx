import React from 'react'

import { ThemeProvider } from 'styled-components'
import { theme } from './src/global/styles/theme'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from '@expo-google-fonts/rajdhani'

import { SignIn } from './src/screens/SignIn'
import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </ThemeProvider>
  )
}
