import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'

import loadanimation from '../assets/load.json'

const Load: React.FC = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadanimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200
  }
})

export default Load;