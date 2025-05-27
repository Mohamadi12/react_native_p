import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href='/login' style={styles.navButton}>Login Page</Link>
    </View>
  );
}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 20,
    backgroundColor: "coral",
    textAlign: "center",
    borderRadius: 8
  }
 })