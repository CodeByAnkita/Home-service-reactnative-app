import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import Heading from "../../Components/Heading";
import { Ionicons } from "@expo/vector-icons";

export default function BusinessPhotos({ business }) {
  return (
    <View>
      <Heading text={"Photos"} />
      <FlatList
        data={business.images}
        numOfColumns={2}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{
              width: "100%",
              height: 120,
              flex: 1,
              borderRadius: 15,
              margin: 7,
            }}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({});