import React from 'react';
import { Dimensions, View, Text, ScrollView } from 'react-native';
import Input from '../components/input';
import Buttons from '../components/buttons';
import Minitext from '../components/minitext';
import Maxtext from '../components/maxtext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Background from '../components/backgroundscreen';

const screenHeight = Dimensions.get('screen').height;

const emailValidationSchema = z.string().email();

export default function Passwordrecovery({ navigation }) {
  const { control, handleSubmit } = useForm();

  const OnButtonsPress = () => {
    navigation.navigate('Check');
    //navigation.navigate('Check')
  };

  return (
    <View style={{ backgroundColor: '#5364db', flex: 1 }}>
      <Background />
      <View style={{ backgroundColor: 'white', borderRadius: 30, flex: 1,height : screenHeight }}>
        <View style={{ flex: 1, marginTop: 10 }}>
          <Maxtext text="Password recovery" />
          <Minitext text="Enter your email to recover your password" />
          <View style={{ marginTop: 15 }}>
            <Input
              control={control}
              name="Email"
              placeholder="Email"
              rules={{
                required: 'Email is required',
                validate: {
                  validEmail: (value: string) =>
                    emailValidationSchema.safeParse(value).success || 'Email is invalid',
                },
              }}
            />
          </View>
          <Buttons onPress={handleSubmit(OnButtonsPress)} text="Recover Password" />
        </View>
        <View style={{ backgroundColor: 'red', paddingBottom: 10 }}>
          <Text style={{ textAlign: 'center', fontSize: 10, color: 'white' }}>
            This product was brought to you by jeeniso
          </Text>
        </View>
      </View>
    </View>
  );
}
