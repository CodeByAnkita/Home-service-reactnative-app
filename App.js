import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedOut, SignedIn } from "@clerk/clerk-expo";
import { NavigationContainer } from "react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useFonts } from "expo-font";

// const tokenCache = {
//   getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return null;
//     }
//   },
// };

export default function App() {
  const [fontsLoaded] = useFonts({
    "outfit ": require("./assets/Fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/Fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./assets/Fonts/Outfit-Bold.ttf"),
  });
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_b3Blbi13ZXJld29sZi02NC5jbGVyay5hY2NvdW50cy5kZXYk"
    >
      <View style={styles.container}>
        {/* Sign In Component*/}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        {/* Sign Out Component*/}
        <SignedOut>
          <Login />
          <Text>You are Signed out</Text>
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
