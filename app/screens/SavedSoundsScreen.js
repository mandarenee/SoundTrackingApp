import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function SavedSoundsScreen(props) {
  const { handlePageUpdate } = props
  
  const returnHome = () => {
    handlePageUpdate('Welcome')
    console.log("Return home")
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.savedSounds}>
        <Text style={styles.titleText}>
          Saved Sounds
        </Text>
        <View style={styles.savedSoundsList}>
          <Icon.Button 
            name='volume-down'
            backgroundColor='white'
            color='black'>
            <Text>Sound 1</Text>
          </Icon.Button>
          <Icon.Button 
            name='volume-down'
            backgroundColor='white'
            color='black'>
            <Text>Sound 2</Text>
          </Icon.Button>
          <Icon.Button 
            name='volume-down'
            backgroundColor='white'
            color='black'>
            <Text>Sound 3</Text>
          </Icon.Button>
        </View>

        <View style={styles.buttonContainer}>
          <Icon.Button
            name='upload'
            color='black'
            backgroundColor='#aaa'
            onPress={ returnHome } 
            >
            Back to Home Screen
          </Icon.Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'pink',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
  }, 
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 80,
    marginTop: 100,
  },
  iconPadding: {
    margin: 50
  },
  savedSounds: {
    alignItems: 'flex-start',
    height: '100%',
    paddingLeft: 50,
  },
  savedSoundsList: {
    paddingLeft: 12
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
})

export default SavedSoundsScreen
