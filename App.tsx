import Passwordrecovery from './src/Pages/PasswordrecoveryFinal';
import Check from './src/Pages/check you Email';
import Reset from './src/Pages/resetfinal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  
  return (
  
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Passwordrecovery">
    <Stack.Screen
      name="Check"
      component={Check}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Passwordrecovery"
      component={Passwordrecovery}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Reset"
      component={Reset}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
</NavigationContainer>
      
  );
}
 