import { Image, StyleSheet, TouchableOpacity } from "react-native";

export function GoogleLoginButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Image
        source={require("@assets/images/logos/google/google-logo.png")}
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
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#747775",
  },
  icon: {
    width: 18,
    height: 18,
  },
});
