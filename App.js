import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SingUp from "./screens/SingUp";
import LogIn from "./screens/LogIn";
import HomeScreen from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Inicio de sesión' component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name='Registro' component={SingUp} options={{ headerShown: false }} />
        <Stack.Screen name='Inicio' component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
