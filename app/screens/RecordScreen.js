import React, { useEffect, useRef, useState } from 'react'
import { Animated, Button, StyleSheet, Easing, Text, View, SafeAreaView } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ButtonIcon from 'react-native-vector-icons/FontAwesome5'

const RecordScreen = (props) => {

  const handlePageUpdate = () => {
    props.handlePageUpdate('Recorded')
  }

  return (
    <View style={ styles.container }>

      <Icon name='reload' size={100} />
      <Text>Recording...</Text>

      <ButtonIcon.Button
        name='upload'
        color='black'
        backgroundColor='#aaa'
        style={ styles.uploadButton }
        onPress={ handlePageUpdate } >
          Return to home page
      </ButtonIcon.Button>
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
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
    
})

export default RecordScreen
