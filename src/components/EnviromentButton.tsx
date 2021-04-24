import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import {
  RectButton,
  RectButtonProps
} from 'react-native-gesture-handler'

import colors from '../styles/colors';
import fonts from '../styles/fonts'

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({
  title, active = false, ...rest
}) => {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>
        {title}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5
  },

  containerActive: {
    backgroundColor: colors.green_light
  },  

  text: {
    color: colors.heading,
    fontFamily: fonts.text 
  },

  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }
})

export default EnviromentButton;