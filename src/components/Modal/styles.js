import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

const { grey } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    width: "100%",
    height: 250,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  sessionItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 80,
    height: 80,
  },
  sessionButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    padding: 14,
    borderRadius: 10,
  },
  description: {
    color: grey,
    fontSize: 14,
  },
  text: {
    color: "#ffff",
    fontSize: 14,
  },
});
