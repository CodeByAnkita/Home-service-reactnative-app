import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function PageHeading({ title }) {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back-outline" size={30} color="black" />
      <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
