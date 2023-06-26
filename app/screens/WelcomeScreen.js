import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


function WelcomeScreen(props) {
  const { handlePageUpdate } = props
  
  const recordSound = () => {
    handlePageUpdate('Record')
    console.log("Recording Sound")
  }
  
  const uploadSound = () => {
    console.log("Uploading Sound")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={ styles.buttonContainer }>
        <Icon.Button
          name='record-vinyl'
          backgroundColor='#ed1c24'
          style={ styles.recordButton }
          onPress={ recordSound } >
            Record Engine Sound
        </Icon.Button>

        <Icon.Button
          name='upload'
          color='black'
          backgroundColor='#aaa'
          style={ styles.uploadButton }
          onPress={ uploadSound } >
            Upload Sound
        </Icon.Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'space-between',
    height: '50%',
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 80
  },
  recordButton: {
  },
  uploadButton: {
    alignItems: 'flex-end'
  }
})

export default WelcomeScreen
