import React from 'react'
import { Text  } from 'react-native-elements'
import { View ,StyleSheet } from 'react-native'
const maxtext =  ({text}) =>   {
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
      marginVertical: 10,
      
      
      
     
    },
    text :{
      fontSize : 30 ,
      
    },
    
    });
export default maxtext 