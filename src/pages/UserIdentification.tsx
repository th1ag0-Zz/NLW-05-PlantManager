import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import Button from '../components/Button'

function UserIdentification() {
  const { navigate } = useNavigation()

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  async function handleSubmit() {

    if (!name)
      return Alert.alert('Me diz como chamar você, por favor 🥺')

    try {
      await AsyncStorage.setItem('@plantmanager:user', name)
      navigate('PlantSelect', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas.',
        buttonTitle: 'Começar',
        icon: 'smille',
        nextScreen: 'PlantSelect'
      })
    } catch {
      Alert.alert('Não foi possível salvar o seu nome 🥺')
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.emoji}>
                {isFilled ? '😄' : '😁'}
              </Text>
              <Text style={styles.title}>
                Como podemos{'\n'}chamar você?
              </Text>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green }
                ]}
                placeholder="Digite seu nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View style={styles.footer}>
                <Button title="Confirmar" onPress={handleSubmit} />
              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  content: {
    flex: 1,
    width: '100%'
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },

  emoji: {
    fontSize: 48,
    marginBottom: 20
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },

  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20
  }
})

export default UserIdentification;