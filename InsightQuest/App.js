import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar } from 'react-native';
import Home from "./screens/Home";
import Inicio from "./screens/Inicio";
import Jogo from "./screens/Jogo";

export default function App() {
  return (
        <NavigationContainer>
          <StatusBar/>
          <Stack.Navigator initialRouteName={'Inicio'} screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Inicio" component={Inicio}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Jogo" component={Jogo}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
}