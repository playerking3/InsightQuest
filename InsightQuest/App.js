import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Inicio from "./screens/Inicio";
import Home from "./screens/Home";
import Jogo from "./screens/Jogo";


export default function App() {

  const Stack = createStackNavigator()

  return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName={'Jogo'}
              screenOptions={{ headerShown: false}}>
              <Stack.Screen name="Inicio" component={Inicio}/>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Jogo" component={Jogo}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}
