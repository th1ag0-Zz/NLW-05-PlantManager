import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
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

  // useEffect(() => {
  //   async function notifications() {
  //     const data = await Notifications.getAllScheduledNotificationsAsync()
  //     console.log(data)
  //   }
  //   notifications()
  // }, [])

  if (!fontLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}