import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native';

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
})

export default Button;