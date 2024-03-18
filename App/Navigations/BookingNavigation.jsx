import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import BusinessDetailsScreen from "../Screens/BusinessDetailsScreen";

const Stack = createStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator
      ScreenOption={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="booking" component={BookingScreen}></Stack.Screen>
      <Stack.Screen
        name="business-detail"
        component={BusinessDetailsScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
