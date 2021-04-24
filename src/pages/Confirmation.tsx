import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Button from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

function Confirmation() {
  const { navigate } = useNavigation()

  function handleSubmit() {
    navigate('PlantSelect')
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😄
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>

        <Text style={styles.subtitle}>
          Vamos começar a cuidar da suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button
            title="Começar"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },

  emoji: {
    fontSize: 78,
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15
  },

  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading
  },

  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
})

export default Confirmation;