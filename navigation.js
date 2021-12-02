import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screen/Home";
import AlbumDetails from './Screen/AlbumDetails';


export default function Navigation() {
  const Stack = createStackNavigator();
  // const screenOptions = {
  //   headerShown: true,
  // };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AlbumDetails" component={AlbumDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
