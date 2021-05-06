import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    async function loadStorage() {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUserName(user || '')
    }
    loadStorage()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image
        style={styles.image}
        source={{uri: 'https://avatars.githubusercontent.com/u/61771003?v=4'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },

  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },

  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },

  image: {
    borderRadius: 35,
    width: 70,
    height: 70
  }
})

export default Header;