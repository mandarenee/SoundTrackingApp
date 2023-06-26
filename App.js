import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from './app/screens/WelcomeScreen'
import RecordScreen from './app/screens/RecordScreen'
import RecordedScreen from './app/screens/RecordedScreen'
import SavedSoundsScreen from './app/screens/SavedSoundsScreen'


const components = {
  'Welcome': WelcomeScreen,
  'Record': RecordScreen,
  'Recorded': RecordedScreen,
  'SavedSounds': SavedSoundsScreen
}

export default function App() {
  const [page, setPage] = useState('Welcome')
  const CurrentComponent = components[page]

  // const CurrentComponent = SavedSoundsScreen

  const handlePageUpdate = (newPage) => {
    setPage(newPage)
  }

  return (
    <CurrentComponent
      handlePageUpdate={ handlePageUpdate } />
  )
}

const styles = StyleSheet.create({
  
})
