import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';
import {  Input } from 'galio-framework';
const Inputsp = ({ control, name, placeholder, rules = {} , secureTextEntry , eye , handlepress  }) => {
  return (
    <Controller 
    control = {control} 
    name = {name} 
    rules = {rules}
    render ={({field : {value , onChange , onBlur} , fieldState : {error}}) => (

      <> 
          <View style={{ marginRight:30 , marginLeft : 30 , marginBottom: 15 }}>
          <TouchableOpacity onPress={handlepress}>
              <Input 
                 value = {value }
                 onChangeText = {onChange} 
                 onBlur = {onBlur} 
                 placeholder = {placeholder} 
                  right
                  icon={eye}  
                 family="Feather"
                 iconSize={18}
                 iconColor="black"
                 secureTextEntry = {secureTextEntry}
                 rounded = {true}
                  style={{ borderRadius: 30 ,   }}
                  bgColor = '#eeeeee'
                /> 
               </TouchableOpacity>
          </View>
          {error && (
            <Text style = {{color : 'red' , alignSelf : 'stretch' , textAlign : 'center'}}> {error.message || 'Error' }   </Text>
          )}

              
      </>
    )} 
    />
  ) ; 
};


export default Inputsp