import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import HomeNavigation from "./HomeNavigation";
import BookingNavigation from "./BookingNavigation";
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeNavigation}
        option={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="booking"
        component={BookingNavigation}
        option={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Booking
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        option={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}