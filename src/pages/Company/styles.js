import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

const { grey } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  title: {
    color: grey,
  },
});
