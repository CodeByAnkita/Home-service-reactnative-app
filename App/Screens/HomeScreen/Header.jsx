import { View, Text, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        {/*profile Section */}
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontFamily: "outfit",
                }}
              >
                Welcome,
              </Text>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 20,
                  fontFamily: "outfit-medium",
                }}
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={27} color="White" />
        </View>
        {/*Search Bar Section*/}
        <View styles={styles.searchBarContainer}>
          <TextInput placeholder="Search" styles={styles.TextInput} />
          <FontAwesome
            name="search"
            style={styles.searchbtn}
            size={24}
            color={Colors.PRIMARY}
          />
        </View>
      </View>
    )
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  TextInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
    fontFamily: "outfit",
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  searchbtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
