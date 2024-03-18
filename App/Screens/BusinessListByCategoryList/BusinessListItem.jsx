import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function BusinessListItem({ business, booking }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("business-detail", { business: business })}
    >
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text
          style={{ fontFamily: "outfit", color: Colors.GARY, fontSize: 15 }}
        >
          {business.contactPerson}
        </Text>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 19 }}></Text>

        {!booking?.id ? (
          <Text
            style={{
              fontFamily: "outfit",
              color: Colors.GARY,
              fontSize: 19,
            }}
          >
            <Ionicons
              name="ios-location-sharp"
              size={20}
              color={Colors.PRIMARY}
            />
            {business.address}
          </Text>
        ) : (
          <Text
            style={[
              {
                padding: 5,
                borderRadius: 5,
                fontSize: 14,
                alignSelf: "flex-start",
              },
              booking?.bookingStatus == "completed"
                ? {
                    backgroundColor: Colors.LIGHT_GREEN,
                    color: Colors,
                    GREEN,
                  }
                : booking?.bookingStatus == "canceled"
                ? { backgroundColor: Colors.LIGHT_RED, color: Colors, RED }
                : {
                    color: Colors.PRIMARY,
                    backgroundColor: Colors.PRIMARY_LIGHT,
                  },
            ]}
          >
            {booking?.bookingStatus}
          </Text>
        )}

        {booking?.id ? (
          <Text
            style={{ fontFamily: "outfit", color: Colors.GARY, fontSize: 16 }}
          >
            <AntDesign
              name="calendar"
              size={24}
              color={Colors.PRIMARY}
              style={{ marginRight: 15 }}
            />
            {booking.date} at {booking.time}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
