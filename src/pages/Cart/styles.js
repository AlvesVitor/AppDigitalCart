import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

const { grey } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10
  },
  sessionTotal: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  total: {
    fontSize: 16,
    color: "green",
    marginLeft: 5
  },
  sessionImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 200
  },
  title: {
    fontSize: 14,
    color: grey,
    marginTop: 2
  },
});
