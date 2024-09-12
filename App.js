import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FaltCards from './components/FaltCards'
import ElevatedCard from './components/ElevatedCard'

const App = () => {
  return (
    <SafeAreaView >
      <ScrollView>
        <FaltCards  />
        <ElevatedCard  />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App