
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default function Header() {
  const navigation =useNavigation();

  const handleOnPress = () =>{  
      navigation.navigate('Home');
  }
  return (
    <TouchableNativeFeedback onPress={handleOnPress}>
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')}/>
      <Text style={styles.text}>DS Delivery</Text>
    </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#DA5C5C',
    height: 100,
    paddingTop:50,
    flexDirection:'row',
    justifyContent:'center'
  },
  text:{
    marginLeft:15,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#FFFFFF',
    fontFamily: 'OpenSans_700Bold'
  }
});
