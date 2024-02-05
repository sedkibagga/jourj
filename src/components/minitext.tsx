import React from 'react'
import { Text  } from 'react-native-elements'
import { View ,StyleSheet } from 'react-native'
const minitext =  ({text}) =>   {
  return (
    <View style = {styles.buttonsContainer}>
   
        <Text style = {styles.text}> {text}   </Text>

    </View>
  )
}
const styles = StyleSheet.create({

    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 1 ,
      
      
      
     
    },
    text :{
      fontSize : 15 ,
    },
    
    });
export default minitext