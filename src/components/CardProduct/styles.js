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
  totalText: {
    fontSize: 12,
    paddingVertical: 7,
    color: grey,
  },
  sessionAmount: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sessionTotal: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  areaInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.2,
    borderColor: grey,
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 2,
    marginTop: 7,
    backgroundColor: "#f5f5f5",
  },
  input: {
    fontSize: 14,
    marginLeft: 10,
  },
});
