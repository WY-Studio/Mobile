import { Image, StyleSheet, View } from "react-native";

export function AppleLoginButton() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@assets/images/logos/apple/apple-logo.png")}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#000000",
  },
  icon: {
    width: 22,
    height: 22,
  },
});
