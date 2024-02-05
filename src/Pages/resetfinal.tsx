import React, { useState } from 'react';
import { Dimensions, View, Text } from 'react-native';
import Inputsp from '../components/loginsp';
import Buttons from '../components/buttons';
import Maxtext from '../components/maxtext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Background from '../components/backgroundscreen';

const screenHeight = Dimensions.get('window').height;
const passwordValidationSchema = z.string().min(8);

function Reset({ navigation }) {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch('New password');
  const [hidePassword, setHidePassword] = useState(false);

  const onButtonsPress = () => {
    navigation.navigate('Passwordrecovery');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#5364db' }}>
      <Background />

      <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 30 , height:screenHeight }}>
        <View style={{ marginTop: 10, flex: 1 }}>
          <Maxtext text="Reset your password" />
          <View style={{ marginTop: 15 }}>
            <Inputsp
              handlepress={() => setHidePassword(!hidePassword)}
              eye={hidePassword ? 'eye-off' : 'eye'}
              control={control}
              name="New password"
              placeholder="New password"
              secureTextEntry={hidePassword}
              rules={{
                validate: (value) => passwordValidationSchema.safeParse(value).success || 'Password should be at least 8 characters long',
              }}
            />
          </View>

          <View>
            <Inputsp
              handlepress={() => setHidePassword(!hidePassword)}
              eye={hidePassword ? 'eye-off' : 'eye'}
              control={control}
              name="Confirm password"
              placeholder="Confirm password"
              secureTextEntry={hidePassword}
              rules={{
                validate: (value) => value === pwd || 'Passwords do not match',
              }}
            />
          </View>

          <View>
            <Buttons onPress={handleSubmit(onButtonsPress)} text="Done" />
          </View>
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

export default Reset;
