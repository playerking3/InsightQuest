import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Inicio from "./screens/Inicio";


export default function App() {

  const Stack = createStackNavigator()

  return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName={'Inicio'}
              screenOptions={{ headerShown: false}}>
              <Stack.Screen name="Inicio" component={Inicio}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}
