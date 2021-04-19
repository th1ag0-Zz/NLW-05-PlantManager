import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  View } from 'react-native';

import colors from '../styles/colors'
import watering from '../assets/watering.png'

export function Welcome() {

  const icon = '>'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}suas plantas de{'\n'}forma fácil
      </Text>

      <Image source={watering} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={styles.buttonText}> {icon} </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },

  image: {
    width: 292,
    height: 284
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

  buttonText: {
    color: '#fff',
    fontSize: 24
  }
})