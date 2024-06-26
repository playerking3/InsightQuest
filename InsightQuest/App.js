import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Inicio from "./screens/Inicio";
import Home from "./screens/Home";
import Jogo from "./screens/Jogo";
import {DadosProvider} from "./context/Dados";


export default function App() {

  const Stack = createStackNavigator()

  return (
      <DadosProvider>
          <NavigationContainer>
              <StatusBar translucent={false} />
              <Stack.Navigator
                  initialRouteName={'Inicio'}
                  screenOptions={{ headerShown: false}}>
                  <Stack.Screen name="Inicio" component={Inicio}/>
                  <Stack.Screen name="Home" component={Home}/>
                  <Stack.Screen name="Jogo" component={Jogo}/>
              </Stack.Navigator>
          </NavigationContainer>
      </DadosProvider>
  );
}
