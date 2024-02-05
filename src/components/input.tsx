import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Controller, FieldValues} from 'react-hook-form';
import { Input } from 'galio-framework';
import { FieldPath } from 'react-hook-form';
interface InputsProps<TFieldValues extends FieldValues = FieldValues> {
  control: any;
  name: FieldPath<TFieldValues>;
  placeholder: string;
  rules?: object;
  secureTextEntry?: boolean;
}

const Inputs: React.FC<InputsProps> = ({ control, name, placeholder, rules = {}, secureTextEntry }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View style={{ marginRight: 30, marginLeft: 30, marginBottom: 15 }}>
            <Input
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              rounded={true}
              bgColor="#eeeeee"
              style={{ borderRadius: 30 }}
            />
          </View>
          {error && (
            <Text style={{ color: 'red', alignSelf: 'stretch', textAlign: 'center' }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 20,
    flex: 1,
    padding: 3,
    margin: 10,
  },
  input: {
    color: '#000000',
    padding: 10,
    fontSize: 16,
  },
});

export default Inputs;
