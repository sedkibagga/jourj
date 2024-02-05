import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, withTheme, Text } from '@rneui/themed';

type ButtonsComponentProps = {
  onPress: () => void;
  text: string;
};

const Buttons: React.FunctionComponent<ButtonsComponentProps> = ({ onPress, text }) => {
  return (
    <View style={styles.buttonsContainer}>
      <Button
        title={text}
        buttonStyle={{
          borderColor: 'transparent',
        }}
        type="outline"
        raised
        titleStyle={{ color: 'rgba(67, 100, 219, 1)' }}
        containerStyle={{
          width: 314,
          marginHorizontal: 30,
          marginVertical: 5,
          borderRadius: 30,
        }}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
  },
});

export default withTheme(Buttons, '');
