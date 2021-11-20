import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../Constants/Colors';
import {  Box } from 'native-base';
export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Box _text={{color:"brand.secondary"}}>Hello world</Box>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
  },
  text:{
      color:Colors.secondary,
      fontSize:20,
  }
});
