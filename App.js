import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './Screens/AuthScreen';
import { NativeBaseProvider ,extendTheme } from 'native-base';
import Colors from './Constants/Colors';

const newColorTheme = {
  brand: {
    primary:Colors.primary,
    secondary: Colors.secondary,
  },
};
const theme = extendTheme({ colors: newColorTheme });
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AuthScreen/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
