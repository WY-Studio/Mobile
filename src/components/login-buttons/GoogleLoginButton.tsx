import { Image, StyleSheet, View } from "react-native";

export function GoogleLoginButton() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@assets/images/logos/google/google-logo.png")}
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
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#747775",
  },
  icon: {
    width: 18,
    height: 18,
  },
});
