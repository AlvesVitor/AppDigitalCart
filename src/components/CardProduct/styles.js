import { StyleSheet } from "react-native";

import { theme } from ".././../global/styles/theme";

const { grey } = theme.colors;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#f5f5f5",
    paddingHorizontal: 10,
    marginVertical: 7,
  },
  sessionImg: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  AreaDescription: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 12,
    color: grey,
  },
  amountText: {
    fontSize: 12,
    paddingHorizontal: 10,
    color: grey,
  },
  totalText: {
    fontSize: 12,
    paddingVertical: 7,
    color: grey,
  },
  sessionAmount: {
    paddingVertical: 7,
    flexDirection: "row",
  },
  sessionTotal: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
