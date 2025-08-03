import { Image, StyleSheet, TouchableOpacity } from "react-native";

export function AppleLoginButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Image
        source={require("@assets/images/logos/apple/apple-logo.png")}
        style={styles.icon}
      />
    </TouchableOpacity>
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
