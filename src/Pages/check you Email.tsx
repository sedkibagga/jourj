import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Maxtext from '../components/maxtext';
import Minitext from '../components/minitext';
import Background from '../components/backgroundscreen';

const screenHeight = Dimensions.get('window').height;

function Check({ navigation }) {
  const exampleText1 = "We've sent the link to your email";
  const exampleText2 = "Couldn't find it?";

  const sendpress = () => {
    navigation.navigate('Reset');
    // navigation.navigate('Passwordrecovery');
  };

  return (
    <View style={{ backgroundColor: '#5364db', flex: 1 }}>
      <Background />
      <View style={{ backgroundColor: 'white', borderRadius: 10, flex: 1, padding: 20, justifyContent: 'space-between',height:screenHeight }}>
        <View>
          <Maxtext text="Check your Email" />
          <Minitext text={exampleText1} />
          <Text style={styles.pos}>
            {exampleText2}{' '}
            <Text style={styles.couleur} onPress={sendpress}>
              send again
            </Text>
          </Text>
        </View>

        <View>
          
          <Text style={{ textAlign: 'center', fontSize: 10, marginBottom: 0 }}>
            This product was brought to you by jeeniso
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pos: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
  },
  couleur: {
    color: '#578DFF',
  },
});

export default Check;
