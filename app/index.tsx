import { StyleSheet } from "react-native";

import { View } from "react-native";
import { AppleLoginButton, GoogleLoginButton } from "@components";

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <AppleLoginButton />
      <GoogleLoginButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
});
