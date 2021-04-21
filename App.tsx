import React from 'react';
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import Routes from './src/routes';

export default function App() {

  const [fontLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}