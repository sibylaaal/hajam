import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { ToastProvider } from 'react-native-toast-notifications'

export default function Layout() {
  const [fontloded,seterror]=useFonts({
    'Poppins':require("../assets/Poppins-Bold.ttf")
  })





  useEffect(()=>{


    if(fontloded) SplashScreen.hideAsync()
  },[fontloded])

  if(!fontloded) return null

  return (
    <ToastProvider
    
    successColor="#1faf73"

    >

      <Stack initialRouteName='index' >
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />


        <Stack.Screen name='(auth)' options={{headerShown:false}}/>

      </Stack></ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Inter_400Regular', // Apply the font globally
  },
});
