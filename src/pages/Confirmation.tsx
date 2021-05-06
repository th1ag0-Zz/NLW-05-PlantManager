import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import Button from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smille' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smille: '😄'
}

const Confirmation: React.FC = () => {
  const { navigate } = useNavigation()
  const routes = useRoute()

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params

  function handleSubmit() {
    navigate(nextScreen)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          {emojis[icon]}
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>

        <View style={styles.footer}>
          <Button
            title={buttonTitle}
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