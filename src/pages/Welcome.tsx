import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons'

import colors from '../styles/colors'
import watering from '../assets/watering.png'
import fonts from '../styles/fonts';

function Welcome() {

  const { navigate } = useNavigation()

  function handleStart() {
    navigate('UserIdentification')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}suas plantas de{'\n'}forma fácil
      </Text>

      <Image
        source={watering}
        style={styles.image}
        resizeMode='contain'
      />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleStart}
      >
        <Feather
          name="chevron-right"
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },

  image: {
    height: Dimensions.get('window').width * 0.7
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white
  }
})

export default Welcome;