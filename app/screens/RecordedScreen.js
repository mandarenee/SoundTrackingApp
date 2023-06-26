import React, { useEffect, useRef, useState } from 'react'
import { Animated, Button, StyleSheet, Easing, Text, View, SafeAreaView } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ButtonIcon from 'react-native-vector-icons/FontAwesome5'
import SoundIcon from 'react-native-vector-icons/AntDesign'

const RecordedScreen = (props) => {

  const listenToSound = () => {
    console.log("Listening to Sound")
  }

  const saveSound = () => {
    props.handlePageUpdate('SavedSounds')
    console.log("Saving Sound")
  }

  const rerecordSound = () => {
    props.handlePageUpdate('Welcome')
    console.log("Re-record Sound")
  }

  return (
    <View style={styles.container}>
        <ButtonIcon name='check' size={60} />
        <Text>Recorded!</Text>

        <View style={ styles.buttonContainer }>
          <ButtonIcon.Button
            name='volume-down'
            color='black'
            backgroundColor='#aaa'
            style={ styles.button }
            onPress={ listenToSound } 
          >
            Listen
          </ButtonIcon.Button>
          <ButtonIcon.Button
            name='save'
            color='black'
            backgroundColor='#aaa'
            style={ styles.button }
            onPress={ saveSound } 
            >
              Save Sound
          </ButtonIcon.Button>
          <ButtonIcon.Button
            name='microphone'
            color='black'
            backgroundColor='#aaa'
            style={ styles.button }
            onPress={ rerecordSound } 
            >
              Re-Record
          </ButtonIcon.Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200
  },
  buttonContainer: {
    height: 200,
    justifyContent: 'space-between',
    paddingTop: 50
  }
})

export default RecordedScreen
