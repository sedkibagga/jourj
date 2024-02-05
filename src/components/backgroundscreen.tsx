import React from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Image, StyleSheet } from 'react-native';
const Background = () => {
  const {height} = useWindowDimensions();
  return(
    <View style={styles.root}>
      <Image source={require("../../assets/final.png")} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
alignItems: 'center',
padding: 20,
height : 200,

  },
  
  logo: {
    maxWidth: 1000,
    maxHeight: 200,
    width: 800,
    height: 800,
  },
});

 export default Background